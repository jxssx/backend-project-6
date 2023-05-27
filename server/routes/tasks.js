import i18next from 'i18next';

export default (app) => {
  app
    .get('/tasks', { name: 'tasks', preValidation: app.authenticate }, async (req, reply) => {
      const taskQuery = app.objection.models.task.query().withGraphJoined('[status, author, executor]');
      const [tasks, statuses, users] = await Promise.all([
        taskQuery,
        app.objection.models.status.query(),
        app.objection.models.user.query(),
      ]);
      reply.render('tasks/index', { tasks, statuses, users });
      return reply;
    })
    .get('/tasks/new', { name: 'newTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = new app.objection.models.task();
      const [statuses, users] = await Promise.all([
        await app.objection.models.status.query(),
        await app.objection.models.user.query(),
      ]);
      reply.render('tasks/new', { task, statuses, users });
      return reply;
    })
    .post('/tasks', { name: 'createTask', preValidation: app.authenticate }, async (req, reply) => {
      const { id: authorId } = req.user;
      const task = new app.objection.models.task();
      const {
        name, description, statusId, executorId,
      } = req.body.data;
      const taskData = {
        name,
        description,
        statusId: Number(statusId),
        executorId: Number(executorId),
        authorId,
      };
      task.$set(taskData);
      try {
        const validTask = await app.objection.models.task.fromJson(taskData);
        await app.objection.models.task.transaction(async (trx) => {
          const newTask = {
            ...validTask,
          };
          const insertTask = await app.objection.models.task.query(trx).insertGraph(newTask);
          return insertTask;
        });
        req.flash('info', i18next.t('flash.tasks.create.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        const [statuses, users] = await Promise.all([
          await app.objection.models.status.query(),
          await app.objection.models.user.query(),
        ]);
        req.flash('error', i18next.t('flash.tasks.create.error'));
        reply.render('tasks/new', {
          task, statuses, users, errors: data,
        });
      }

      return reply;
    })
    .delete('/tasks/:id', { name: 'deleteTask', preValidation: app.authenticate }, async (req, reply) => {
      const taskId = Number(req.params.id);
      const task = await app.objection.models.task.query().withGraphJoined('[author, executor, status]').findById(taskId);
      const { authorId } = task;
      if (authorId !== req.user.id) {
        req.flash('error', i18next.t('flash.tasks.delete.noAccess'));
        return reply.redirect(app.reverse('tasks'));
      }
      try {
        await app.objection.models.task.transaction(async (trx) => {
          await task.$query(trx).delete();
        });
        req.flash('info', i18next.t('flash.tasks.delete.success'));
      } catch (err) {
        req.flash('error', i18next.t('flash.tasks.delete.error'));
      }
      reply.redirect(app.reverse('tasks'));
      return reply;
    })
    .get('/tasks/:id', { name: 'task', preValidation: app.authenticate }, async (req, reply) => {
      const taskId = Number(req.params.id);
      const task = await app.objection.models.task.query().withGraphJoined('[author, executor, status]').findById(taskId);

      reply.render('tasks/task', { task });
      return reply;
    })
    .get('/tasks/:id/edit', { name: 'editTask', preValidation: app.authenticate }, async (req, reply) => {
      const taskId = Number(req.params.id);
      const taskQuery = app.objection.models.task.query().withGraphJoined('[status, author, executor]').findById(taskId);
      const [task, statuses, users] = await Promise.all([
        await taskQuery,
        await app.objection.models.status.query(),
        await app.objection.models.user.query(),
      ]);
      reply.render('tasks/edit', { task, statuses, users });
      return reply;
    })
    .patch('/tasks/:id', { name: 'updateTask', preValidation: app.authenticate }, async (req, reply) => {
      const taskId = Number(req.params.id);
      const prevTask = await app.objection.models.task.query().withGraphJoined('[status, author, executor]').findById(taskId);
      const { authorId } = prevTask;
      const task = new app.objection.models.task();
      const {
        name, description, statusId, executorId,
      } = req.body.data;
      const taskData = {
        id: taskId,
        name,
        description,
        statusId: Number(statusId),
        executorId: Number(executorId),
        authorId: Number(authorId),
      };
      task.$set({ ...taskData });
      try {
        const validTask = await app.objection.models.task.fromJson(taskData);
        await app.objection.models.task.transaction(async (trx) => {
          const updatedTask = {
            id: taskId,
            ...validTask,
          };
          const insertTask = await app.objection.models.task.query(trx)
            .upsertGraph(updatedTask, { relate: true, unrelate: true });
          return insertTask;
        });
        req.flash('info', i18next.t('flash.tasks.update.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        const [users, statuses] = await Promise.all([
          app.objection.models.user.query(),
          app.objection.models.status.query(),
        ]);
        req.flash('error', i18next.t('flash.tasks.update.error'));
        reply.render('tasks/edit', {
          task, statuses, users, errors: data,
        });
      }

      return reply;
    });
};

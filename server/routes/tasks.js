import i18next from 'i18next';

export default (app) => {
  app
    .get('/tasks', { name: 'tasks', preValidation: app.authenticate }, async (req, reply) => {
      const { id: authorId } = req.user;
      const { query } = req;
      const {
        status, executor, label, isUserCreator,
      } = query;
      const taskQuery = app.objection.models.task.query().withGraphJoined('[status, author, executor, labels]');
      taskQuery.modify('filterStatus', status || undefined);
      taskQuery.modify('filterExecutor', executor || undefined);
      taskQuery.modify('filterLabel', label || undefined);
      if (isUserCreator === 'on') {
        taskQuery.modify('filterAuthor', authorId || undefined);
      }

      const [tasks, statuses, users, labels] = await Promise.all([
        taskQuery,
        app.objection.models.status.query(),
        app.objection.models.user.query(),
        app.objection.models.label.query(),
      ]);
      reply.render('tasks/index', {
        tasks,
        statuses,
        users,
        labels,
        query,
      });
      return reply;
    })
    .get('/tasks/new', { name: 'newTask', preValidation: app.authenticate }, async (req, reply) => {
      const task = new app.objection.models.task();
      const [statuses, users, labels] = await Promise.all([
        await app.objection.models.status.query(),
        await app.objection.models.user.query(),
        await app.objection.models.label.query(),
      ]);
      reply.render('tasks/new', {
        task, statuses, users, labels,
      });
      return reply;
    })
    .post('/tasks', { name: 'createTask', preValidation: app.authenticate }, async (req, reply) => {
      const { id: authorId } = req.user;
      const task = new app.objection.models.task();
      const {
        name, description, statusId, executorId, labels: labelsList = [],
      } = req.body.data;
      const taskData = {
        name,
        description,
        statusId: Number(statusId),
        executorId: Number(executorId),
        authorId,
      };
      const labelIds = [...labelsList].map((labelId) => ({ id: Number(labelId) }));
      task.$set({ ...taskData, labels: labelIds });
      try {
        const validTask = await app.objection.models.task.fromJson(taskData);
        await app.objection.models.task.transaction(async (trx) => {
          const newTask = {
            ...validTask,
            labels: labelIds,
          };
          const insertTask = await app.objection.models.task.query(trx).insertGraph(newTask, { relate: ['labels'] });
          return insertTask;
        });
        req.flash('info', i18next.t('flash.tasks.create.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        const [statuses, users, labels] = await Promise.all([
          await app.objection.models.status.query(),
          await app.objection.models.user.query(),
          await app.objection.models.label.query(),
        ]);
        req.flash('error', i18next.t('flash.tasks.create.error'));
        reply.render('tasks/new', {
          task, statuses, users, labels, errors: data,
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
      const task = await app.objection.models.task.query().withGraphJoined('[author, executor, status, labels]').findById(taskId);

      reply.render('tasks/task', { task });
      return reply;
    })
    .get('/tasks/:id/edit', { name: 'editTask', preValidation: app.authenticate }, async (req, reply) => {
      const taskId = Number(req.params.id);
      const taskQuery = app.objection.models.task.query().withGraphJoined('[status, author, executor, labels]').findById(taskId);
      const [task, statuses, users, labels] = await Promise.all([
        await taskQuery,
        await app.objection.models.status.query(),
        await app.objection.models.user.query(),
        await app.objection.models.label.query(),
      ]);
      reply.render('tasks/edit', {
        task,
        statuses,
        users,
        labels,
      });
      return reply;
    })
    .patch('/tasks/:id', { name: 'updateTask', preValidation: app.authenticate }, async (req, reply) => {
      const taskId = Number(req.params.id);
      const prevTask = await app.objection.models.task.query().withGraphJoined('[status, author, executor, labels]').findById(taskId);
      const { authorId } = prevTask;
      const task = new app.objection.models.task();
      const {
        name, description, statusId, executorId, labels: labelsList = [],
      } = req.body.data;
      const taskData = {
        id: taskId,
        name,
        description,
        statusId: Number(statusId),
        executorId: Number(executorId),
        authorId: Number(authorId),
      };
      const labelIds = [...labelsList].map((labelId) => ({ id: Number(labelId) }));
      task.$set({ ...taskData, labels: labelIds });
      try {
        const validTask = await app.objection.models.task.fromJson(taskData);
        await app.objection.models.task.transaction(async (trx) => {
          const updatedTask = {
            id: taskId,
            ...validTask,
            labels: labelIds,
          };
          const insertTask = await app.objection.models.task.query(trx)
            .upsertGraph(updatedTask, { relate: true, unrelate: true });
          return insertTask;
        });
        req.flash('info', i18next.t('flash.tasks.update.success'));
        reply.redirect(app.reverse('tasks'));
      } catch ({ data }) {
        const [users, statuses, labels] = await Promise.all([
          app.objection.models.user.query(),
          app.objection.models.status.query(),
          app.objection.models.label.query(),
        ]);
        req.flash('error', i18next.t('flash.tasks.update.error'));
        reply.render('tasks/edit', {
          task, statuses, users, labels, errors: data,
        });
      }

      return reply;
    });
};

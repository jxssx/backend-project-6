// @ts-check

import i18next from 'i18next';

export default (app) => {
  app
    .get('/statuses', { name: 'statuses', preValidation: app.authenticate }, async (req, reply) => {
      const statuses = await app.objection.models.statuses.query();
      reply.render('statuses/index', { statuses });
      return reply;
    })
    .get('/statuses/new', { name: 'newStatus' }, (req, reply) => {
      const status = new app.objection.models.statuses();
      reply.render('statuses/new', { status });
    })
    .get('/statuses/:id/edit', { name: 'editStatus', preValidation: app.authenticate }, async (req, reply) => {
      const statusId = Number(req.params.id);

      const status = await app.objection.models.statuses.query().findById(statusId);
      reply.render('statuses/edit', { status });
      return reply;
    })
    .patch('/statuses/:id', { name: 'updateStatus', preValidation: app.authenticate }, async (req, reply) => {
      const statusId = Number(req.params.id);
      const status = await app.objection.models.statuses.query().findById(statusId);

      try {
        const validStatus = await app.objection.models.statuses.fromJson(req.body.data);
        await status.$query().update(validStatus);
        req.flash('info', i18next.t('flash.statuses.edit.success'));
        reply.redirect(app.reverse('statuses'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.statuses.edit.error'));
        reply.render('statuses/edit', { status, errors: data });
      }

      return reply;
    })
    .delete('/statuses/:id', { name: 'deleteStatus', preValidation: app.authenticate }, async (req, reply) => {
      const statusId = Number(req.params.id);
      try {
        await app.objection.models.statuses.query().deleteById(statusId);
        req.flash('info', i18next.t('flash.statuses.delete.success'));
      } catch (err) {
        req.flash('error', i18next.t('flash.statuses.delete.error'));
        reply.redirect(app.reverse('statuses'));
      }

      reply.redirect(app.reverse('statuses'));
      return reply;
    })
    .post('/statuses', { name: 'createStatus', preValidation: app.authenticate }, async (req, reply) => {
      const status = new app.objection.models.statuses();
      status.$set(req.body.data);

      try {
        const validStatus = await app.objection.models.statuses.fromJson(req.body.data);
        await app.objection.models.statuses.query().insert(validStatus);
        req.flash('info', i18next.t('flash.statuses.create.success'));
        reply.redirect(app.reverse('statuses'));
      } catch ({ data }) {
        req.flash('error', i18next.t('flash.statuses.create.error'));
        reply.render('statuses/new', { status, errors: data });
      }

      return reply;
    });
};

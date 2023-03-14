// @ts-check

import i18next from 'i18next';

export default (app) => {
  app
    .get('/statuses', { name: 'statuses', preHandler: app.authenticate }, async (req, reply) => {
      const statuses = await app.objection.models.statuses.query();
      reply.render('statuses/index', { statuses });
      return reply;
    })
    .get('/statuses/new', { name: 'newStatus', preHandler: app.authenticate }, async (req, reply) => {
      const status = new app.objection.models.statuses();
      reply.render('statuses/new', { status });
      return reply;
    })
    .post('/statuses', { preHandler: app.authenticate }, async (req, reply) => {
      const status = new app.objection.models.statuses();
      status.$set(req.body.data);
      await app.objection.models.statuses.query().insert(status);
      reply.redirect(app.reverse('statuses'));
      return reply;
    });
};

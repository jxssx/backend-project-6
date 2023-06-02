// @ts-check

import fastify from 'fastify';

import init from '../server/plugin.js';
import { prepareData, makeLogin } from './helpers/index.js';

describe('test statuses CRUD', () => {
  let app;
  let knex;
  let models;
  let testData;
  let cookie;

  beforeAll(async () => {
    app = fastify({
      exposeHeadRoutes: false,
      logger: { target: 'pino-pretty' },
    });
    await init(app);
    knex = app.objection.knex;
    models = app.objection.models;

    // TODO: пока один раз перед тестами
    // тесты не должны зависеть друг от друга
    // перед каждым тестом выполняем миграции
    // и заполняем БД тестовыми данными
    await knex.migrate.latest();
    testData = await prepareData(app);
  });

  beforeEach(async () => {
    cookie = await makeLogin(app, testData.users.existing.author);
  });

  it('index', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('statuses'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('new', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('newStatus'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('create', async () => {
    const params = testData.statuses.new;
    const response = await app.inject({
      method: 'POST',
      url: app.reverse('createStatus'),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    const status = await models.status.query().findOne({ name: params.name });
    expect(status).toMatchObject(params);
  });

  it('delete', async () => {
    const params = testData.statuses.existing.delete;
    const status = await models.status.query().findOne({ name: params.name });
    const response = await app.inject({
      method: 'DELETE',
      url: app.reverse('deleteStatus', { id: status.id }),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    const deletedStatus = await models.status.query().findOne({ name: params.name });
    expect(deletedStatus).toBeUndefined();
  });

  it('update', async () => {
    const params = testData.statuses.existing.update;
    const status = await models.status.query().findOne({ name: params.name });
    const updatedStatusName = 'updated';
    const response = await app.inject({
      method: 'PATCH',
      url: app.reverse('updateStatus', { id: status.id }),
      payload: {
        data: { name: updatedStatusName },
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);

    const updatedStatus = await status.$query();
    expect(updatedStatus.name).toEqual(updatedStatusName);
  });

  afterEach(async () => {
    // Пока Segmentation fault: 11
    // после каждого теста откатываем миграции
    // await knex.migrate.rollback();
  });

  afterAll(async () => {
    await app.close();
  });
});

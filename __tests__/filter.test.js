// @ts-check

import fastify from 'fastify';

import init from '../server/plugin.js';
import { prepareData, makeLogin } from './helpers/index.js';

describe('test labels CRUD', () => {
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
    const statuses = await models.status.query();
    const query = { status: statuses[0], executor: '', label: '' };
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('tasks'),
      query,
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
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

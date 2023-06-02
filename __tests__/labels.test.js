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
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('labels'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('new', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('newLabel'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('create', async () => {
    const params = testData.labels.new;
    const response = await app.inject({
      method: 'POST',
      url: app.reverse('createLabel'),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    const label = await models.label.query().findOne({ name: params.name });
    expect(label).toMatchObject(params);
  });

  it('delete', async () => {
    const params = testData.labels.existing.delete;
    const label = await models.label.query().findOne({ name: params.name });
    const response = await app.inject({
      method: 'DELETE',
      url: app.reverse('deleteLabel', { id: label.id }),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    const deletedLabel = await models.label.query().findOne({ name: params.name });
    expect(deletedLabel).toBeUndefined();
  });

  it('update', async () => {
    const params = testData.labels.existing.update;
    const label = await models.label.query().findOne({ name: params.name });
    const updatedLabelName = 'updated';
    const response = await app.inject({
      method: 'PATCH',
      url: app.reverse('updateLabel', { id: label.id }),
      payload: {
        data: { name: updatedLabelName },
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);

    const updatedLabel = await label.$query();
    expect(updatedLabel.name).toEqual(updatedLabelName);
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

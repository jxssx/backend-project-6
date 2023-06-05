// @ts-check

import fastify from 'fastify';

import init from '../server/plugin.js';
import { prepareData, makeLogin } from './helpers/index.js';

describe('test tasks CRUD', () => {
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
      url: app.reverse('tasks'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('certain task', async () => {
    const params = testData.tasks.existing.update;
    const task = await models.task.query().findOne({ name: params.name });

    const response = await app.inject({
      method: 'GET',
      url: app.reverse('tasks', { id: task.id }),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('new', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('newTask'),
      cookies: cookie,
    });

    expect(response.statusCode).toBe(200);
  });

  it('create', async () => {
    const params = testData.tasks.new;
    const response = await app.inject({
      method: 'POST',
      url: app.reverse('createTask'),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    const task = await models.task.query().findOne({ name: params.name });
    expect(task).toMatchObject(params);
  });

  it('delete', async () => {
    const params = testData.tasks.existing.delete;
    const task = await models.task.query().findOne({ name: params.name });
    const response = await app.inject({
      method: 'DELETE',
      url: app.reverse('deleteTask', { id: task.id }),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    const deletedTask = await models.task.query().findOne({ name: params.name });
    expect(deletedTask).toBeUndefined();
  });

  it('update', async () => {
    const params = testData.tasks.existing.update;
    const task = await models.task.query().findOne({ name: params.name });
    const updatedTaskName = 'updated';
    const response = await app.inject({
      method: 'PATCH',
      url: app.reverse('updateTask', { id: task.id }),
      payload: {
        data: {
          ...params,
          name: updatedTaskName,
        },
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);

    const updatedTask = await task.$query();
    expect(updatedTask.name).toEqual(updatedTaskName);
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

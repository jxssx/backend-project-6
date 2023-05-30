// @ts-check

import _ from 'lodash';
import fastify from 'fastify';

import init from '../server/plugin.js';
import encrypt from '../server/lib/secure.cjs';
import { prepareData, makeLogin } from './helpers/index.js';

describe('test users CRUD', () => {
  let app;
  let knex;
  let models;
  let testData;

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
  });

  it('index', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('users'),
    });

    expect(response.statusCode).toBe(200);
  });

  it('new', async () => {
    const response = await app.inject({
      method: 'GET',
      url: app.reverse('newUser'),
    });

    expect(response.statusCode).toBe(200);
  });

  it('create', async () => {
    const params = testData.users.new;
    const response = await app.inject({
      method: 'POST',
      url: app.reverse('users'),
      payload: {
        data: params,
      },
    });

    expect(response.statusCode).toBe(302);
    const expected = {
      ..._.omit(params, 'password'),
      passwordDigest: encrypt(params.password),
    };
    const user = await models.user.query().findOne({ email: params.email });
    expect(user).toMatchObject(expected);
  });

  it('update', async () => {
    const params = testData.users.existing.delete;
    const user = await models.user.query().findOne({ email: params.email });
    const newLastName = 'Gorbachev';

    const cookie = await makeLogin(app, testData.users.existing.delete);
    const response = await app.inject({
      method: 'PATCH',
      url: app.reverse('updateUser', { id: user.id }),
      payload: {
        data: {
          ...params,
          lastName: newLastName,
        },
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    const updatedUser = await user.$query();
    expect(updatedUser.lastName).toEqual(newLastName);
  });

  it('delete', async () => {
    const params = testData.users.existing.delete;
    const user = await models.user.query().findOne({ email: params.email });

    const cookie = await makeLogin(app, testData.users.existing.delete);
    const response = await app.inject({
      method: 'DELETE',
      url: app.reverse('deleteUser', { id: user.id }),
      payload: {
        data: params,
      },
      cookies: cookie,
    });

    expect(response.statusCode).toBe(302);
    expect(await models.user.query().findOne({ email: params.email })).toBeUndefined();
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

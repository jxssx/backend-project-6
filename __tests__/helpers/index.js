// @ts-check

import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { generateUsers, generateStatuses, generateTasks } from './faker.js';

// TODO: использовать для фикстур https://github.com/viglucci/simple-knex-fixtures

const getFixturePath = (filename) => path.join('..', '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(new URL(getFixturePath(filename), import.meta.url), 'utf-8').trim();
const getFixtureData = (filename) => JSON.parse(readFixture(filename));

export const getTestData = () => ({
  users: generateUsers(),
  statuses: generateStatuses(),
  tasks: generateTasks(),
});

export const prepareData = async (app) => {
  const { knex } = app.objection;

  const usersData = generateUsers();
  const statusesData = generateStatuses();

  await knex('users').insert(usersData.seeds);
  await knex('statuses').insert(statusesData.seeds);
  const users = await knex('users');
  const statuses = await knex('statuses');
  const tasksData = generateTasks(users, statuses);

  await knex('tasks').insert(tasksData.seeds);

  return {
    users: usersData,
    statuses: statusesData,
    tasks: tasksData,
  };
};

export const makeLogin = async (app, userData) => {
  const responseSignIn = await app.inject({
    method: 'POST',
    url: app.reverse('session'),
    payload: {
      data: userData,
    },
  });
  const [sessionCookie] = responseSignIn.cookies;
  const { name, value } = sessionCookie;
  const cookie = { [name]: value };

  return cookie;
};

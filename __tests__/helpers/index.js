// @ts-check

import {
  generateUsers, generateStatuses, generateTasks, generateLabels,
} from './faker.js';

// TODO: использовать для фикстур https://github.com/viglucci/simple-knex-fixtures

export const getTestData = () => ({
  users: generateUsers(),
  statuses: generateStatuses(),
  tasks: generateTasks(),
  labels: generateLabels(),
});

export const prepareData = async (app) => {
  const { knex } = app.objection;

  const usersData = generateUsers();
  const statusesData = generateStatuses();
  const labelsData = generateLabels();

  await knex('users').insert(usersData.seeds);
  await knex('statuses').insert(statusesData.seeds);
  await knex('labels').insert(labelsData.seeds);
  const users = await knex('users');
  const statuses = await knex('statuses');
  const tasksData = generateTasks(users, statuses);

  await knex('tasks').insert(tasksData.seeds);

  return {
    users: usersData,
    statuses: statusesData,
    tasks: tasksData,
    labels: labelsData,
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

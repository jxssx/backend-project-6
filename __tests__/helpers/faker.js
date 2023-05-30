import { faker } from '@faker-js/faker';
import _ from 'lodash';
import encrypt from '../../server/lib/secure.cjs';

const generators = {
  user: () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  }),
  status: () => ({
    name: faker.word.noun(),
  }),
  task: () => ({
    name: faker.word.noun(),
    description: faker.lorem.paragraph(),
  }),
};

const generateData = (type, length = 1) => {
  const data = [];
  const generator = generators[type];

  Array.from({ length }).forEach(() => {
    data.push(generator());
  });

  return data;
};

const generateUsers = () => {
  const newUser = generateData('user', 1);
  const users = generateData('user', 3);
  const seeds = users.map((user) => ({
    ..._.omit(user, 'password'),
    passwordDigest: encrypt(user.password),
  }));
  return {
    new: newUser[0],
    existing: {
      author: users[0],
      executor: users[1],
      forDelete: users[2],
    },
    seeds,
  };
};

const generateStatuses = () => {
  const newStatus = generateData('status', 1);
  const statuses = generateData('status', 2);
  return {
    new: newStatus[0],
    existing: {
      update: statuses[0],
      delete: statuses[1],
    },
    seeds: statuses,
  };
};

const generateTasks = (users, statuses) => {
  const [author, executor] = users;
  const [status] = statuses;

  const formTask = (task) => ({
    ...task,
    authorId: author.id,
    executorId: executor.id,
    statusId: status.id,
  });

  const newTasks = generateData('task').map(formTask);
  const existingTasks = generateData('task', 2).map(formTask);

  return {
    new: newTasks[0],
    existing: {
      update: existingTasks[0],
      delete: existingTasks[1],
    },
    seeds: existingTasks,
  };
};

export {
  generateUsers, generateStatuses, generateTasks,
};

// @ts-check

export const up = (knex) => (
  knex.schema.createTable('tasks_labels', (table) => {
    table.integer('task_id').references('id').inTable('tasks');
    table.integer('label_id').references('id').inTable('labels');
  })
);

export const down = (knex) => knex.schema.dropTable('tasks_labels');

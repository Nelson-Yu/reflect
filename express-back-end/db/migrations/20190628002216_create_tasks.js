
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tasks', table => {
      table.increments('id');
      table.integer('user_id').references('users.id')
      table.string('title');
      table.boolean('completed');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tasks')
  ])
};

exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('sleeps', table => {
      table.increments('id');
      table.integer('user_id').references('users.id')
      table.date('date');
      table.integer('time_sec');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('sleeps')
  ])
};

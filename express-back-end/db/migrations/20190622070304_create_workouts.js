
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('workouts', table => {
      table.increments('id');
      table.ingeger('user_id').references('users.id')
      table.date('date');
      table.string('exercise');
      table.integer('time_sec');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('workouts')
  ])
};

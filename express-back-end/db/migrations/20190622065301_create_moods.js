
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('moods', table => {
      table.increments('id');
      table.integer('user_id').references('users.id')
      table.date('date');
      table.integer('rank');
      table.integer('emoji_rank');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('moods')
  ])
};

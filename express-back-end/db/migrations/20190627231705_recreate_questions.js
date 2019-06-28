
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('questions', table => {
      table.increments('id');
      table.string('question');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('questions')
  ])
};
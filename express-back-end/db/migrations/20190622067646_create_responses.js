
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('responses', table => {
      table.increments('id');
      table.date('date');
      table.string('answer1');
      table.string('answer2');
      table.string('answer3');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('responses')
  ])
};


exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('rescuetime_categories', table => {
      table.increments('id');
      table.integer('user_id')
      table.date('date');
      table.string('category');
      table.integer('percentage');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('rescuetime_categories')
  ])
};

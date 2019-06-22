
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('rescuetime_categories', table => {
      table.increments('id');
      table.ingeger('user_id').references('users.id')
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

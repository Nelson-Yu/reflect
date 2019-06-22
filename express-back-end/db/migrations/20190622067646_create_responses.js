
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('responses', table => {
      table.increments('id');
      table.ingeger('mood_id').references('moods.id')
      table.ingeger('question_id').references('questions.id')
      table.string('answer');
      table.integer('sentiment_rank');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('responses')
  ])
};

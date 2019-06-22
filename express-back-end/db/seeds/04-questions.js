
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('questions').del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {id: 1, question: 'How was your day today?'},
        {id: 2, question: 'What was the most impactful thing you did today?'},
        {id: 3, question: 'Are you looking forward to anything?'}
      ]);
    });
};

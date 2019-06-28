
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {id: 1, answer: 'good'},
        {id: 2, answer: 'great'},
        {id: 3, answer: 'bad'},
        {id: 4, answer: 'ok'},
        {id: 5, answer: 'ok'},
        {id: 6, answer: 'terrible'},
        {id: 7, answer: 'great'},
        {id: 8, answer: 'great'},
        {id: 9, answer: 'good'},
        {id: 10, answer: 'great'},
        {id: 11, answer: 'bad'},
        {id: 12, answer: 'ok'},
        {id: 13, answer: 'ok'},
        {id: 14, answer: 'terrible'},
      ]);
    });
};

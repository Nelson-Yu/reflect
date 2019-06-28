
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {id: 1, answer1: 'good', answer2: 'good', answer3: 'good', date: '2019-06-14'},
        {id: 2, answer1: 'great', answer2: 'good', answer3: 'good', date: '2019-06-15'},
        {id: 3, answer1: 'bad', answer2: 'good', answer3: 'good', date: '2019-06-16'},
        {id: 4, answer1: 'ok', answer2: 'good', answer3: 'good', date: '2019-06-17'},
        {id: 5, answer1: 'ok', answer2: 'good', answer3: 'good', date: '2019-06-18'},
        {id: 6, answer1: 'terrible', answer2: 'good', answer3: 'good', date: '2019-06-19'},
        {id: 7, answer1: 'great', answer2: 'good', answer3: 'good', date: '2019-06-20'},
        {id: 8, answer1: 'great', answer2: 'good', answer3: 'good', date: '2019-06-21'},
        {id: 9, answer1: 'good', answer2: 'good', answer3: 'good', date: '2019-06-22'},
        {id: 10, answer1: 'great', answer2: 'good', answer3: 'good', date: '2019-06-23'},
        {id: 11, answer1: 'bad', answer2: 'good', answer3: 'good', date: '2019-06-24'},
        {id: 12, answer1: 'ok', answer2: 'good', answer3: 'good', date: '2019-06-25'},
        {id: 13, answer1: 'ok', answer2: 'good', answer3: 'good', date: '2019-06-26'},
        {id: 14, answer1: 'terrible', answer2: 'good', answer3: 'good', date: '2019-06-27'},
      ]);
    });
};

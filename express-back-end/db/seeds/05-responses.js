
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {id: 1001, answer1: 'good', answer2: 'good', answer3: 'good', date: '2019-06-14'},
        {id: 1002, answer1: 'great', answer2: 'good', answer3: 'good', date: '2019-06-15'},
        {id: 1003, answer1: 'bad', answer2: 'good', answer3: 'good', date: '2019-06-16'},
        {id: 1004, answer1: 'ok', answer2: 'good', answer3: 'good', date: '2019-06-17'},
        {id: 1005, answer1: 'ok', answer2: 'good', answer3: 'good', date: '2019-06-18'},
        {id: 1006, answer1: 'terrible', answer2: 'good', answer3: 'good', date: '2019-06-19'},
        {id: 1007, answer1: 'great', answer2: 'good', answer3: 'good', date: '2019-06-20'},
        {id: 1008, answer1: 'great', answer2: 'good', answer3: 'good', date: '2019-06-21'},
        {id: 1009, answer1: 'good', answer2: 'good', answer3: 'good', date: '2019-06-22'},
        {id: 1010, answer1: 'great', answer2: 'good', answer3: 'good', date: '2019-06-23'},
        {id: 1011, answer1: 'bad', answer2: 'good', answer3: 'good', date: '2019-06-24'},
        {id: 1012, answer1: 'ok', answer2: 'good', answer3: 'good', date: '2019-06-25'},
        {id: 1013, answer1: 'ok', answer2: 'good', answer3: 'good', date: '2019-06-26'},
        {id: 1014, answer1: 'terrible', answer2: 'good', answer3: 'good', date: '2019-06-27'},
        {id: 1015, answer1: 'terrible', answer2: 'good', answer3: 'good', date: '2019-06-28'},
        {id: 1016, answer1: 'terrible', answer2: 'good', answer3: 'good', date: '2019-06-29'},
        {id: 1017, answer1: 'terrible', answer2: 'good', answer3: 'good', date: '2019-06-30'},
        {id: 1018, answer1: 'terrible', answer2: 'good', answer3: 'good', date: '2019-07-01'},
      ]);
    });
};

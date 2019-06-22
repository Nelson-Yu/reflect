
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Nelson Yu', email: 'test1@gmail.com', password: 'test1'},
        {id: 2, name: 'Turner Schumann', email: 'test2@gmail.com', password: 'test2'},
        {id: 3, name: 'Liam Hetherington', email: 'test3@gmail.com', password: 'test3'}
      ]);
    });
};

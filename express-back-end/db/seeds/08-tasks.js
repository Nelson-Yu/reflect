
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1001, user_id: 1, title: 'Finish final project', completed: false},
        {id: 1002, user_id: 1, title: 'Practice Presentation', completed: false},
        {id: 1003, user_id: 1, title: 'Demo Day', completed: false}
      ]);
    });
};

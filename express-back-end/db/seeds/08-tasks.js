
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, user_id: 1, title: 'Test1', completed: false},
        {id: 2, user_id: 1, title: 'Test2', completed: false},
        {id: 3, user_id: 1, title: 'Test3', completed: false}
      ]);
    });
};

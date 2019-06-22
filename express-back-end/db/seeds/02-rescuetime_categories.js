
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rescuetime_categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('rescuetime_categories').insert([
        {id: 1, user_id: 1, date: '2019-06-15', category: 'Entertainment', percentage: 14},
        {id: 2, user_id: 1, date: '2019-06-16', category: 'Entertainment', percentage: 29},
        {id: 3, user_id: 1, date: '2019-06-17', category: 'Entertainment', percentage: 17},
        {id: 4, user_id: 1, date: '2019-06-18', category: 'Entertainment', percentage: 13},
        {id: 5, user_id: 1, date: '2019-06-19', category: 'Entertainment', percentage: 13},
        {id: 6, user_id: 1, date: '2019-06-20', category: 'Entertainment', percentage: 20},
        {id: 7, user_id: 1, date: '2019-06-21', category: 'Entertainment', percentage: 21},
        {id: 8, user_id: 1, date: '2019-06-15', category: 'Social Networking', percentage: 10},
        {id: 9, user_id: 1, date: '2019-06-16', category: 'Social Networking', percentage: 12},
        {id: 10, user_id: 1, date: '2019-06-17', category: 'Social Networking', percentage: 15},
        {id: 11, user_id: 1, date: '2019-06-18', category: 'Social Networking', percentage: 20},
        {id: 12, user_id: 1, date: '2019-06-19', category: 'Social Networking', percentage: 11},
        {id: 13, user_id: 1, date: '2019-06-20', category: 'Social Networking', percentage: 5},
        {id: 14, user_id: 1, date: '2019-06-21', category: 'Social Networking', percentage: 7},
        {id: 15, user_id: 2, date: '2019-06-15', category: 'Business', percentage: 11},
        {id: 16, user_id: 2, date: '2019-06-16', category: 'Business', percentage: 10},
        {id: 17, user_id: 2, date: '2019-06-17', category: 'Business', percentage: 11},
        {id: 18, user_id: 2, date: '2019-06-18', category: 'Business', percentage: 20},
        {id: 19, user_id: 2, date: '2019-06-19', category: 'Business', percentage: 18},
        {id: 20, user_id: 2, date: '2019-06-20', category: 'Business', percentage: 30},
        {id: 21, user_id: 2, date: '2019-06-21', category: 'Business', percentage: 15},
        {id: 22, user_id: 2, date: '2019-06-15', category: 'Software Developent', percentage: 4},
        {id: 23, user_id: 2, date: '2019-06-16', category: 'Software Developent', percentage: 16},
        {id: 24, user_id: 2, date: '2019-06-17', category: 'Software Developent', percentage: 15},
        {id: 25, user_id: 2, date: '2019-06-18', category: 'Software Developent', percentage: 10},
        {id: 26, user_id: 2, date: '2019-06-19', category: 'Software Developent', percentage: 10},
        {id: 27, user_id: 2, date: '2019-06-20', category: 'Software Developent', percentage: 20},
        {id: 28, user_id: 2, date: '2019-06-21', category: 'Software Developent', percentage: 8}
      ]);
    });
};

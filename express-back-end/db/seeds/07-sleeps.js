
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sleeps').del()
    .then(function () {
      // Inserts seed entries
      return knex('sleeps').insert([
        {id: 1, user_id: 1, date: '2019-06-08', time_min: 420},
        {id: 2, user_id: 1, date: '2019-06-09', time_min: 405},
        {id: 3, user_id: 1, date: '2019-06-10', time_min: 480},
        {id: 4, user_id: 1, date: '2019-06-11', time_min: 400},
        {id: 5, user_id: 1, date: '2019-06-12', time_min: 400},
        {id: 6, user_id: 1, date: '2019-06-13', time_min: 360},
        {id: 7, user_id: 1, date: '2019-06-14', time_min: 420},
        {id: 8, user_id: 1, date: '2019-06-15', time_min: 500},
        {id: 9, user_id: 1, date: '2019-06-16', time_min: 500},
        {id: 10, user_id: 1, date: '2019-06-17', time_min: 450}, 
        {id: 11, user_id: 1, date: '2019-06-18', time_min: 450},
        {id: 12, user_id: 1, date: '2019-06-19', time_min: 300},
        {id: 13, user_id: 1, date: '2019-06-20', time_min: 300},
        {id: 14, user_id: 1, date: '2019-06-21', time_min: 420},
        {id: 15, user_id: 2, date: '2019-06-08', time_min: 415},
        {id: 16, user_id: 2, date: '2019-06-09', time_min: 410},
        {id: 17, user_id: 2, date: '2019-06-10', time_min: 420},
        {id: 18, user_id: 2, date: '2019-06-11', time_min: 455},
        {id: 19, user_id: 2, date: '2019-06-12', time_min: 450},
        {id: 20, user_id: 2, date: '2019-06-13', time_min: 430},
        {id: 21, user_id: 2, date: '2019-06-14', time_min: 430},
        {id: 22, user_id: 2, date: '2019-06-15', time_min: 380},
        {id: 23, user_id: 2, date: '2019-06-16', time_min: 370},
        {id: 24, user_id: 2, date: '2019-06-17', time_min: 370},
        {id: 25, user_id: 2, date: '2019-06-18', time_min: 360},
        {id: 26, user_id: 2, date: '2019-06-19', time_min: 365},
        {id: 27, user_id: 2, date: '2019-06-20', time_min: 425},
        {id: 28, user_id: 2, date: '2019-06-21', time_min: 420}
      ]);
    });
};

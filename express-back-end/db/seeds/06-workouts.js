
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        {id: 1, user_id: 1, date: '2019-06-08', exercise: 'running', time_min: 60},
        {id: 2, user_id: 1, date: '2019-06-09', exercise: 'gym', time_min: 90},
        {id: 3, user_id: 1, date: '2019-06-10', exercise: 'swim', time_min: 45},
        {id: 4, user_id: 1, date: '2019-06-11', exercise: 'none', time_min: 0},
        {id: 5, user_id: 1, date: '2019-06-12', exercise: 'none', time_min: 0},
        {id: 6, user_id: 1, date: '2019-06-13', exercise: 'running', time_min: 60},
        {id: 7, user_id: 1, date: '2019-06-14', exercise: 'gym', time_min: 90},
        {id: 8, user_id: 1, date: '2019-06-15', exercise: 'none', time_min: 0},
        {id: 9, user_id: 1, date: '2019-06-16', exercise: 'none', time_min: 0},
        {id: 10, user_id: 1, date: '2019-06-17', exercise: 'none', time_min: 0}, 
        {id: 11, user_id: 1, date: '2019-06-18', exercise: 'swim', time_min: 45},
        {id: 12, user_id: 1, date: '2019-06-19', exercise: 'sports', time_min: 120},
        {id: 13, user_id: 1, date: '2019-06-20', exercise: 'sports', time_min: 120},
        {id: 14, user_id: 1, date: '2019-06-21', exercise: 'none', time_min: 0},
        {id: 15, user_id: 2, date: '2019-06-08', exercise: 'climbing', time_min: 120},
        {id: 16, user_id: 2, date: '2019-06-09', exercise: 'running', time_min: 60},
        {id: 17, user_id: 2, date: '2019-06-10', exercise: 'none', time_min: 0},
        {id: 18, user_id: 2, date: '2019-06-11', exercise: 'none', time_min: 0},
        {id: 19, user_id: 2, date: '2019-06-12', exercise: 'running', time_min: 60},
        {id: 20, user_id: 2, date: '2019-06-13', exercise: 'running', time_min: 60},
        {id: 21, user_id: 2, date: '2019-06-14', exercise: 'running', time_min: 60},
        {id: 22, user_id: 2, date: '2019-06-15', exercise: 'none', time_min: 0},
        {id: 23, user_id: 2, date: '2019-06-16', exercise: 'none', time_min: 0},
        {id: 24, user_id: 2, date: '2019-06-17', exercise: 'gym', time_min: 90},
        {id: 25, user_id: 2, date: '2019-06-18', exercise: 'gym', time_min: 90},
        {id: 26, user_id: 2, date: '2019-06-19', exercise: 'running', time_min: 60},
        {id: 27, user_id: 2, date: '2019-06-20', exercise: 'none', time_min: 0},
        {id: 28, user_id: 2, date: '2019-06-21', exercise: 'none', time_min: 0}
      ]);
    });
};

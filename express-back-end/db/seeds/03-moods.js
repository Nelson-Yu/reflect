
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('moods').del()
    .then(function () {
      // Inserts seed entries
      return knex('moods').insert([
        {id: 1, user_id: 1, date: '2019-06-08', rank: 0.8, emoji_rank: 0.5},
        {id: 2, user_id: 1, date: '2019-06-09', rank: 1.2, emoji_rank: 1},
        {id: 3, user_id: 1, date: '2019-06-10', rank: -0.3, emoji_rank: -0.5},
        {id: 4, user_id: 1, date: '2019-06-11', rank: 0.3, emoji_rank: 0},
        {id: 5, user_id: 1, date: '2019-06-12', rank: 0.4, emoji_rank: 0},
        {id: 6, user_id: 1, date: '2019-06-13', rank: -0.5, emoji_rank: -1},
        {id: 7, user_id: 1, date: '2019-06-14', rank: 1.2, emoji_rank: 1},
        {id: 8, user_id: 1, date: '2019-06-15', rank: 1.7, emoji_rank: 1},
        {id: 9, user_id: 1, date: '2019-06-16', rank: 1, emoji_rank: 0.5},
        {id: 10, user_id: 1, date: '2019-06-17', rank: 2, emoji_rank: 1},
        {id: 11, user_id: 1, date: '2019-06-18', rank: -0.8, emoji_rank: -0.5},
        {id: 12, user_id: 1, date: '2019-06-19', rank: 0.2, emoji_rank: 0},
        {id: 13, user_id: 1, date: '2019-06-20', rank: -0.1, emoji_rank: 0},
        {id: 14, user_id: 1, date: '2019-06-21', rank: -1.3, emoji_rank: -1},
        {id: 15, user_id: 2, date: '2019-06-08', rank: 1.8, emoji_rank: 1},
        {id: 16, user_id: 2, date: '2019-06-09', rank: 1.5, emoji_rank: 1},
        {id: 17, user_id: 2, date: '2019-06-10', rank: 0.9, emoji_rank: 0.5},
        {id: 18, user_id: 2, date: '2019-06-11', rank: 1.4, emoji_rank: 1},
        {id: 19, user_id: 2, date: '2019-06-12', rank: 0.9, emoji_rank: 0.5},
        {id: 20, user_id: 2, date: '2019-06-13', rank: 0.4, emoji_rank: 0},
        {id: 21, user_id: 2, date: '2019-06-14', rank: 0.3, emoji_rank: 0},
        {id: 22, user_id: 2, date: '2019-06-15', rank: 0.3, emoji_rank: 0},
        {id: 23, user_id: 2, date: '2019-06-16', rank: -1.2, emoji_rank: -1},
        {id: 24, user_id: 2, date: '2019-06-17', rank: -0.9, emoji_rank: -0.5},
        {id: 25, user_id: 2, date: '2019-06-18', rank: 0.2, emoji_rank: 0},
        {id: 26, user_id: 2, date: '2019-06-19', rank: 1.2, emoji_rank: 1},
        {id: 27, user_id: 2, date: '2019-06-20', rank: 0.3, emoji_rank: 0.5},
        {id: 28, user_id: 2, date: '2019-06-21', rank: 0.7, emoji_rank: 0.5}
      ]);
    });
};

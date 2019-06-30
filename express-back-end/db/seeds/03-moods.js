
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('moods').del()
    .then(function () {
      // Inserts seed entries
      return knex('moods').insert([
        {id: 1, user_id: 1, date: '2019-06-01', rank: 1, emoji_rank: 0.5},
        {id: 2, user_id: 1, date: '2019-06-02', rank: 2, emoji_rank: 0.5},
        {id: 3, user_id: 1, date: '2019-06-03', rank: 3, emoji_rank: 0.5},
        {id: 4, user_id: 1, date: '2019-06-04', rank: 5, emoji_rank: 0.5},
        {id: 5, user_id: 1, date: '2019-06-05', rank: 5, emoji_rank: 0.5},
        {id: 6, user_id: 1, date: '2019-06-06', rank: 6, emoji_rank: 0.5},
        {id: 7, user_id: 1, date: '2019-06-07', rank: 7, emoji_rank: 0.5},
        {id: 8, user_id: 1, date: '2019-06-08', rank: 8, emoji_rank: 0.5},
        {id: 9, user_id: 1, date: '2019-06-09', rank: 9, emoji_rank: 0.5},
        {id: 10, user_id: 1, date: '2019-06-10', rank: 10, emoji_rank: 0.5},
        {id: 11, user_id: 1, date: '2019-06-11', rank: 1, emoji_rank: 0.5},
        {id: 12, user_id: 1, date: '2019-06-12', rank: 2, emoji_rank: 0.5},
        {id: 13, user_id: 1, date: '2019-06-13', rank: 3, emoji_rank: 0.5},
        {id: 14, user_id: 1, date: '2019-06-14', rank: 6.5, emoji_rank: 0},
        {id: 15, user_id: 1, date: '2019-06-15', rank: 6, emoji_rank: 0.5},
        {id: 16, user_id: 1, date: '2019-06-16', rank: 4, emoji_rank: 0.5},
        {id: 17, user_id: 1, date: '2019-06-17', rank: 6.3, emoji_rank: 0.5},
        {id: 18, user_id: 1, date: '2019-06-18', rank: 6.8, emoji_rank: 0.5},
        {id: 19, user_id: 1, date: '2019-06-19', rank: 7.5, emoji_rank: 0.5},
        {id: 20, user_id: 1, date: '2019-06-20', rank: 7, emoji_rank: 0.5},
        {id: 21, user_id: 1, date: '2019-06-21', rank: 6, emoji_rank: 0.5},
        {id: 22, user_id: 1, date: '2019-06-22', rank: 4, emoji_rank: 0.5},
        {id: 23, user_id: 1, date: '2019-06-23', rank: 3.6, emoji_rank: 0.5},
        {id: 24, user_id: 1, date: '2019-06-24', rank: 5, emoji_rank: 0.5},
        {id: 25, user_id: 1, date: '2019-06-25', rank: 6, emoji_rank: 0.5},
        {id: 26, user_id: 1, date: '2019-06-26', rank: 7.3, emoji_rank: 0.5},
        {id: 27, user_id: 1, date: '2019-06-27', rank: 8, emoji_rank: 1},
        {id: 28, user_id: 1, date: '2019-06-28', rank: 8, emoji_rank: 1},
        {id: 29, user_id: 1, date: '2019-06-29', rank: 8, emoji_rank: 1}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('moods').del()
    .then(function () {
      // Inserts seed entries
      return knex('moods').insert([
        {id: 1001, user_id: 1, date: '2019-06-01', rank: 1, emoji_rank: 0.5},
        {id: 1002, user_id: 1, date: '2019-06-02', rank: 2, emoji_rank: 0.5},
        {id: 1003, user_id: 1, date: '2019-06-03', rank: 3, emoji_rank: 0.5},
        {id: 1004, user_id: 1, date: '2019-06-04', rank: 5, emoji_rank: 0.5},
        {id: 1005, user_id: 1, date: '2019-06-05', rank: 5, emoji_rank: 0.5},
        {id: 1006, user_id: 1, date: '2019-06-06', rank: 6, emoji_rank: 0.5},
        {id: 1007, user_id: 1, date: '2019-06-07', rank: 7, emoji_rank: 0.5},
        {id: 1008, user_id: 1, date: '2019-06-08', rank: 8, emoji_rank: 0.5},
        {id: 1009, user_id: 1, date: '2019-06-09', rank: 9, emoji_rank: 0.5},
        {id: 1010, user_id: 1, date: '2019-06-10', rank: 10, emoji_rank: 0.5},
        {id: 1011, user_id: 1, date: '2019-06-11', rank: 1, emoji_rank: 0.5},
        {id: 1012, user_id: 1, date: '2019-06-12', rank: 2, emoji_rank: 0.5},
        {id: 1013, user_id: 1, date: '2019-06-13', rank: 3, emoji_rank: 0.5},
        {id: 1014, user_id: 1, date: '2019-06-14', rank: 6.5, emoji_rank: 0},
        {id: 1015, user_id: 1, date: '2019-06-15', rank: 6, emoji_rank: 0.5},
        {id: 1016, user_id: 1, date: '2019-06-16', rank: 4, emoji_rank: 0.5},
        {id: 1017, user_id: 1, date: '2019-06-17', rank: 6.3, emoji_rank: 0.5},
        {id: 1018, user_id: 1, date: '2019-06-18', rank: 6.8, emoji_rank: 0.5},
        {id: 1019, user_id: 1, date: '2019-06-19', rank: 7.5, emoji_rank: 0.5},
        {id: 1020, user_id: 1, date: '2019-06-20', rank: 7, emoji_rank: 0.5},
        {id: 1021, user_id: 1, date: '2019-06-21', rank: 6, emoji_rank: 0.5},
        {id: 1022, user_id: 1, date: '2019-06-22', rank: 4, emoji_rank: 0.5},
        {id: 1023, user_id: 1, date: '2019-06-23', rank: 3.6, emoji_rank: 0.5},
        {id: 1024, user_id: 1, date: '2019-06-24', rank: 4.7, emoji_rank: 0.5},
        {id: 1025, user_id: 1, date: '2019-06-25', rank: 6.2, emoji_rank: 0.5},
        {id: 1026, user_id: 1, date: '2019-06-26', rank: 7.3, emoji_rank: 0.5},
        {id: 1027, user_id: 1, date: '2019-06-27', rank: 7.5, emoji_rank: 1},
        {id: 1028, user_id: 1, date: '2019-06-28', rank: 8.4, emoji_rank: 1},
        {id: 1029, user_id: 1, date: '2019-06-29', rank: 8.0, emoji_rank: 1},
        {id: 1030, user_id: 1, date: '2019-06-30', rank: 7.7, emoji_rank: 1},
        {id: 1031, user_id: 1, date: '2019-07-01', rank: 7.0, emoji_rank: 1},
        {id: 1032, user_id: 1, date: '2019-07-02', rank: 7.2, emoji_rank: 1},
        {id: 1033, user_id: 1, date: '2019-07-03', rank: 7.5, emoji_rank: 1}

      ]);
    });
};

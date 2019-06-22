
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {id: 1, mood_id: 1, question_id: 1, answer: 'good', sentiment_rank: 0.5},
        {id: 2, mood_id: 1, question_id: 2, answer: 'great', sentiment_rank: 1},
        {id: 3, mood_id: 1, question_id: 3, answer: 'bad', sentiment_rank: -0.5},
        {id: 4, mood_id: 2, question_id: 1, answer: 'ok', sentiment_rank: 0},
        {id: 5, mood_id: 2, question_id: 2, answer: 'ok', sentiment_rank: 0},
        {id: 6, mood_id: 2, question_id: 3, answer: 'terrible', sentiment_rank: -1},
        {id: 7, mood_id: 3, question_id: 1, answer: 'great', sentiment_rank: 1},
        {id: 8, mood_id: 3, question_id: 2, answer: 'great', sentiment_rank: 1},
        {id: 9, mood_id: 4, question_id: 3, answer: 'good', sentiment_rank: 0.5},
        {id: 10, mood_id: 4, question_id: 1, answer: 'great', sentiment_rank: 1},
        {id: 11, mood_id: 4, question_id: 2, answer: 'bad', sentiment_rank: -0.5},
        {id: 12, mood_id: 5, question_id: 3, answer: 'ok', sentiment_rank: 0},
        {id: 13, mood_id: 5, question_id: 1, answer: 'ok', sentiment_rank: 0},
        {id: 14, mood_id: 5, question_id: 2, answer: 'terrible', sentiment_rank: -1},
      ]);
    });
};

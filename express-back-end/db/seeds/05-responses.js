
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('responses').del()
    .then(function () {
      // Inserts seed entries
      return knex('responses').insert([
        {id: 1001, answer1: 'I had a decent day today.', answer2: 'I learned how to use ActiveRecord for Rails', answer3: 'Yes, I asked for help from mentors.', date: '2019-06-14'},
        {id: 1002, answer1: "I'm okay today", answer2: 'Finished my weekend work on automated testing', answer3: 'Yes, I stayed efficient and finished all of my weekend work', date: '2019-06-15'},
        {id: 1003, answer1: 'Not great.', answer2: 'Nothing really impactful happened today, I just slept in.', answer3: "Not really, I didn/t do much today", date: '2019-06-16'},
        {id: 1004, answer1: 'Pretty good', answer2: 'Learned how to use rspec for automated testing in Rails', answer3: 'Ye, looked up how to use rspec on Google', date: '2019-06-17'},
        {id: 1005, answer1: 'I had a pretty decent day in general', answer2: 'Finished my Jungle Project', answer3: 'Yep, just worked hard to finish my project', date: '2019-06-18'},
        {id: 1006, answer1: "I/m feeling pretty good today", answer2:'Started planning for our final project', answer3: 'Yes, talked a lot with my teammates on our project plans', date: '2019-06-19'},
        {id: 1007, answer1: 'Again, feeling pretty good', answer2: 'More planning today', answer3: 'Ye, asked a mentor about our project', date: '2019-06-20'},
        {id: 1008, answer1: 'Feeling okay today', answer2: 'Last full day of planning', answer3: 'Yep, met with Nima about our project', date: '2019-06-21'},
        {id: 1009, answer1: 'Not bad not great', answer2: 'Tried to start coding for project, struggled to though', answer3: 'Not really, had difficulties starting project', date: '2019-06-22'},
        {id: 1010, answer1: 'Pretty below-average', answer2: 'Learned how to use React-Router', answer3: 'No, still not making much progress in project', date: '2019-06-23'},
        {id: 1011, answer1: 'It was okay', answer2: 'In the process of learnng how to use axios', answer3: 'Kind of...progess for project is slow but it is happening', date: '2019-06-24'},
        {id: 1012, answer1: 'Pretty decent today', answer2: 'Finally, able to fetch through axios', answer3: 'Yes, solidifed axios skills with mentor', date: '2019-06-25'},
        {id: 1013, answer1: 'Pretty solid day', answer2: 'Finished the forms on our page', answer3: 'Ye, learned to integrate NLP', date: '2019-06-26'},
        {id: 1014, answer1: 'I had a positive day ', answer2: 'Made good progress in project development', answer3: 'Ye, RescueTime API fetching is working now', date: '2019-06-27'},
        {id: 1015, answer1: 'Had a great day', answer2: 'Our core for out project is nearing completion', answer3: 'Yep, talked to mentor about how to display our graphs better', date: '2019-06-28'},
        {id: 1016, answer1: 'It was a pretty good day', answer2: 'Every page is operational with the correct features', answer3: 'Ye, project almost done...looking good', date: '2019-06-29'},
        {id: 1017, answer1: 'Pretty decent day', answer2: 'Styling our project', answer3: 'Yep, showed our project to cohortmates to get feedback', date: '2019-06-30'},
        {id: 1018, answer1: 'It was a solid day', answer2: 'Fixed some minor bugs on our project', answer3: 'Yep, researched on Google how to fix bugs', date: '2019-07-01'},
        {id: 1019, answer1: 'Tiring day but efficient', answer2: 'Fine-tuning our project layout', answer3: 'Yes, project is complete', date: '2019-07-02'},
        {id: 1020, answer1: 'I had a decent day', answer2: 'Practiced presentation for Demo Day', answer3: 'Yep, practiced presentation and feeling good about our project', date: '2019-07-03'},
      ]);
    });
};

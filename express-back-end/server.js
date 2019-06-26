const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const request = require("request");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const natural = require("./natural");

const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger  = require('knex-logger');

//Log knex query to stdout
App.use(knexLogger(knex));

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.json());
App.use(cors());

// GET ROUTE FOR CATEGORY DATA
App.get("/api/categories", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/data?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&perspective=rank&restrict_kind=overview&restrict_begin=2019-06-24&restrict_end=2019-06-24&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body).rows);

            // console.log("This is the response: ", JSON.parse(response.body).rows);
        }
    )
);

//GET ROUTE FOR PRODUCTIVITY PULSE
App.get("/api/productivity_pulse", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/data?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&perspective=rank&restrict_kind=productivity&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body));

            // console.log("This is the response: ", JSON.parse(response.body));
        }
    )
);

//GET ROUTE FOR QUESTIONS
App.get("/api/questions", (req, res) => {
    console.log("FETCHING");

    let data = {};
    knex
        .select()
        .table("questions")
        .then(results => {
            data = {
                questions: results
            };
            // console.log(data);
            res.json(data);
        });
});

//POST ROUTE FOR REFLECTION ANSWERS

App.post("/api/new-reflection", (req, res) => {
    console.log(req.body.data);
    // console.log(natural.getSentimentRank(req.body.data.emoji_rank, req.body.data.answer_1, req.body.data.answer_2, req.body.data.answer_3));

    moodRank = natural.getSentimentRank (
                req.body.data.emoji_rank,
                req.body.data.answer_1,
                req.body.data.answer_2,
                req.body.data.answer_3
              );

    knex('moods')
      .insert({rank: moodRank, emoji_rank: req.body.data.emoji_rank})
      .catch(function(err){
        console.log(err)
      })


    res.end("Success");
});

App.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
        `Express seems to be listening on port ${PORT} so that's pretty good 👍`
    );
});
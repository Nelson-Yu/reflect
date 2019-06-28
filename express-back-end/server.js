const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const request = require("request");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const natural = require("./natural");
const moment = require("moment-timezone");

const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const knexLogger = require('knex-logger');

//Log knex query to stdout
App.use(knexLogger(knex));

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.json());
App.use(cors());

const current_date = moment().tz("America/Vancouver").format("YYYY-MM-DD");
// GET ROUTE FOR CATEGORY DATA
App.get("/api/categories", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/data?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&perspective=rank&restrict_kind=overview&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body));

        }
    )
);


// GET ROUTE FOR PRODUCTIVITY CORRELATION CHART
App.get("/api/pulse", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/daily_summary_feed?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body));
            console.log("Productivity pulse: ", (JSON.parse(response.body)[0].productivity_pulse));



            // console.log("This is the response: ", JSON.parse(response.body).rows);

            // console.log(
            //     "This is the categories response: ",
            //     JSON.parse(response.body).rows[3]
            // );

        }
    )
);

// GET ROUTE FOR PRODUCTIVITY CORRELATION CHART
App.get("/api/pulse", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/daily_summary_feed?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body));
            console.log("Productivity pulse: ", (JSON.parse(response.body)[0].productivity_pulse));



            // console.log("This is the response: ", JSON.parse(response.body).rows);

            // console.log(
            //     "This is the categories response: ",
            //     JSON.parse(response.body).rows[3]
            // );

        }
    )
);

// GET ROUTE FOR PRODUCTIVITY CORRELATION CHART
App.get("/api/pulse", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/daily_summary_feed?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body));
            console.log("Productivity pulse: ", (JSON.parse(response.body)[0].productivity_pulse));


            // console.log("This is the response: ", JSON.parse(response.body).rows);

            // console.log(
            //     "This is the categories response: ",
            //     JSON.parse(response.body).rows[3]
            // );

        }
    )
);

//GET ROUTE FOR PRODUCTIVITY CHART
App.get("/api/productivity", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/data?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&perspective=rank&restrict_kind=productivity&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body));

            console.log("This is the response: ", JSON.parse(response.body));

        }
    )
);

//GET ROUTE FOR PRODUCTIVITY PULE
App.get("/api/pulse", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/daily_summary_feed?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&perspective=rank&restrict_kind=productivity&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body));

            console.log("This is the pulse: ", JSON.parse(response.body));

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

//GET ROUTE FOR ARCHIVE
App.get("/api/archive/:date", (req, res) => {
    console.log("FETCHING");

    let data = {};
    knex
        .select('moods.rank')
        .from('moods')
        .where('date', req.params.date)
        .then(results => {
            data = {
                rank: results
            };
            // console.log(data);
            res.json(data);
        });
});



//POST ROUTE FOR REFLECTION ANSWERS

App.post("/api/new-reflection", (req, res) => {
    console.log(req.body.data);
    // console.log(natural.getSentimentRank(req.body.data.emoji_rank, req.body.data.answer_1, req.body.data.answer_2, req.body.data.answer_3));
    console.log
    moodRank = natural.getSentimentRank(
        req.body.data.emoji_rank,
        req.body.data.answer_1,
        req.body.data.answer_2,
        req.body.data.answer_3
    );

    knex('moods')
        .insert({ rank: moodRank, emoji_rank: req.body.data.emoji_rank, date: current_date })
        .catch(function(err) {
            console.log(err)
        })


    res.end("Success");
});

//POST ROUTE FOR FITNESS FORM
App.post("/api/new-workouts", (req, res) => {
    console.log(req.body.data.exercises);
    let exercises = req.body.data.exercises;
    console.log(current_date)

    exercises.forEach(exercise => {
        if (exercise.isChecked) {
            console.log(exercise)
            knex('workouts')
                .insert({ user_id: 1, date: current_date, exercise: exercise.value })
                .catch(function(err) {
                    console.log(err)
                })
        } else {
            console.log("did not insert")
        }
    });
})

App.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
        `Express seems to be listening on port ${PORT} so that's pretty good 👍`
    );
});
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
const knexLogger = require("knex-logger");

//Log knex query to stdout
App.use(knexLogger(knex));

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.json());
App.use(cors());



const key = process.env.RESCUE_TIME_KEY //RescueTime API Key

const current_date = moment()
    .tz("America/Vancouver")
    .format("YYYY-MM-DD");

// GET ROUTE FOR CATEGORY DATA
App.get("/api/categories", (req, res) =>
    request.get(

        `https://www.rescuetime.com/anapi/data?key=${key}&perspective=rank&restrict_kind=overview&format=json`, {},
        (error, response) => {
            res.send(JSON.parse(response.body));
        }
    )
);

// GET ROUTE FOR PRODUCTIVITY CORRELATION CHART
App.get("/api/pulse", (req, res) =>
    request.get(
        `https://www.rescuetime.com/anapi/daily_summary_feed?key=${key}&restrict_begin=2019-06-13&restrict_end=2019-06-27&format=json`, {},
        (error, response) => {
            res.send(JSON.parse(response.body));
        }
    )
);

//GET ROUTE FOR MOOD ON CORRELATION CHART
App.get("/api/moods", (req, res) => {
    console.log("FETCHING");

    const yesterday = moment().tz("America/Vancouver").subtract(1, 'days').format("YYYY-MM-DD");
    const twoWeeksAgo = moment().tz("America/Vancouver").subtract(15, 'days').format("YYYY-MM-DD");

    let data = {};
    knex
        .select("rank", "date")
        .table("moods")
        .whereBetween("date", [
            twoWeeksAgo,
            yesterday
        ])
        .then(results => {
            data = {
                score: results
            };
            console.log(data);
            res.json(data);
        });
});

//GET ROUTE FOR PRODUCTIVITY CHART
App.get("/api/productivity", (req, res) =>
    request.get(
        `https://www.rescuetime.com/anapi/data?key=${key}&perspective=rank&restrict_kind=productivity&format=json`, {},
        (error, response) => {
            res.send(JSON.parse(response.body));
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

//GET ROUTE FOR Mood Rank
App.get("/api/archive/:date", (req, res) => {
    console.log("FETCHING");
    console.log("Requested date is " + req.params.date);

    let data = {};
    knex
        .select("moods.rank")
        .from("moods")
        .where("date", req.params.date)
        .then(results => {
            data = {
                rank: results
            };
            console.log("The data is" + data.rank);
            res.json(data);
        });
});

////GET ROUTE FOR Reflect Answers
App.get("/api/response/:date", (req, res) => {
    console.log("FETCHING");

    let data = {};
    knex
        .select("responses.answer1", "responses.answer2", "responses.answer3")
        .from("responses")
        .where("date", req.params.date)
        .then(results => {
            data = {
                responses: results
            };
            // console.log(data);
            res.json(data);
        });
});

//GET ROUTE FOR TODAY'S MOOD
App.get("/api/mood/today", (req, res) => {
    console.log("FETCHING");
    console.log("Requested date is " + current_date);

    const yesterday = moment().tz("America/Vancouver").subtract(1, 'days').format("YYYY-MM-DD");
    const twoWeeksAgo = moment().tz("America/Vancouver").subtract(15, 'days').format("YYYY-MM-DD");


    let data = {};
    knex
        .select("moods.rank")
        .from("moods")
        .where("date", current_date)
        .then(results => {
            data = {
                rank: results
            };
            console.log(data);
            res.json(data);
        });
});

//GET ROUTE FOR AVERAGE MOOD
App.get("/api/mood/weekly", (req, res) => {
    console.log("FETCHING");
    console.log("Requested date is " + current_date);

    const yesterday = moment().tz("America/Vancouver").subtract(1, 'days').format("YYYY-MM-DD");
    const oneWeeksAgo = moment().tz("America/Vancouver").subtract(7, 'days').format("YYYY-MM-DD");

    let data = {};
    knex
        .select("rank")
        .from("moods")
        .whereBetween("date", [
            oneWeeksAgo,
            yesterday
        ])
        .then(results => {
            data = results
            console.log(data);
            res.json(data);
        });
});



//GET ROUTE FOR TASKS
App.get("/api/tasks", (req, res) => {
    console.log("Fetching");
    let data = [];
    knex
        .select()
        .table("tasks")
        .then(results => {
            console.log(results);
            data = results;
            res.json(data);
        });
});

//POST ROUTE FOR REFLECTION ANSWERS

App.post("/api/new-reflection", (req, res) => {
    console.log("REquest is " + req.body.data.answer_2);
    console.log(
        natural.getSentimentRank(
            req.body.data.emoji_rank,
            req.body.data.answer_1,
            req.body.data.answer_2,
            req.body.data.answer_3
        )
    );
    moodRank = natural.getSentimentRank(
        req.body.data.emoji_rank,
        req.body.data.answer_1,
        req.body.data.answer_2,
        req.body.data.answer_3
    );

    knex("moods")
        .insert({
            rank: moodRank,
            emoji_rank: req.body.data.emoji_rank,
            date: current_date
        })
        .catch(function(err) {
            console.log(err);
        });

    knex("responses")
        .insert({
            answer1: req.body.data.answer_1,
            answer2: req.body.data.answer_2,
            answer3: req.body.data.answer_3,
            date: current_date
        })
        .catch(function(err) {
            console.log(err);
        });

    res.end("Success");
});

//POST ROUTE FOR FITNESS FORM
App.post("/api/new-workouts", (req, res) => {
    console.log(req.body.data.exercises);
    let exercises = req.body.data.exercises;
    console.log(current_date);

    exercises.forEach(exercise => {
        if (exercise.isChecked) {
            console.log(exercise);
            knex("workouts")
                .insert({ user_id: 1, date: current_date, exercise: exercise.value })
                .catch(function(err) {
                    console.log(err);
                });
        } else {
            console.log("did not insert");
        }
    });
});

//POST ROUTE FOR TASKS
App.post("/api/tasks", (req, res) => {
    console.log(req.body.data);
    let task = req.body.data;

    knex("tasks")
        .insert({
            user_id: task.user_id,
            title: task.title,
            completed: task.completed
        })
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });
});

//PUT ROUTE FOR TASKS
App.put("/api/tasks", (req, res) => {
    const tasks = req.body.data;

    tasks.forEach(task => {
        if (task.completed) {
            console.log(task);
            knex("tasks")
                .where("id", task.id)
                .update("completed", true)
                .then(result => {
                    res.json(result);
                })
                .catch(err => {
                    // console.log(err);
                });
        } else {
            console.log(task);
            knex("tasks")
                .where("id", task.id)
                .update("completed", false)
                .then(result => {
                    res.json(result);
                })
                .catch(err => {
                    // console.log(err);
                });
        }
    });
    knex("tasks");
});

//DELETE ROUTE FOR TASKS
App.delete("/api/tasks", (req, res) => {
    console.log(req.body.id);
    knex("tasks")
        .where("id", req.body.id)
        .del()
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
        });
});

App.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
        `Express seems to be listening on port ${PORT} so that's pretty good 👍`
    );
});
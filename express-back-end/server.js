const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
const request = require("request");
const cors = require("cors");

const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static("public"));
App.use(cors());

// GET ROUTE FOR CATEGORY DATA
App.get("/api/categories", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/data?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&perspective=rank&restrict_kind=overview&restrict_begin=2019-06-24&restrict_end=2019-06-24&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body).rows);

            console.log("This is the response: ", JSON.parse(response.body).rows);
        }
    )
);

//GET ROUTE FOR PRODUCTIVITY PULSE
App.get("/api/productivity_pulse", (req, res) =>
    request.get(
        "https://www.rescuetime.com/anapi/data?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD&perspective=rank&restrict_kind=productivity&format=json", {},
        (error, response) => {
            res.send(JSON.parse(response.body));

            console.log("This is the response: ", JSON.parse(response.body));
        }
    )
);

App.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
        `Express seems to be listening on port ${PORT} so that's pretty good 👍`
    );
});
const Express = require('express');
const App = Express();
const BodyParser = require('body-parser');
const PORT = 8080;
const request = require('request');
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()



const ENV = process.env.ENV || "development";
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(Express.static('public'));
App.use(cors());

// Sample GET route
App.get('/api/daily_summary', (req, res) =>
    request.get("https://www.rescuetime.com/anapi/daily_summary_feed?key=B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD", {},
        (error, response) => {
            res.send(response.body);
            console.log(response);
        }));

App.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});
Reflect
==============

Reflect is a personal wellness application designed for users to find correlations between their daily mood, computer productivty, and activities.

![](https://github.com/turnerschumann/reflect/blob/README.md/screenshots/LandingPage.png)
![](https://github.com/turnerschumann/reflect/blob/README.md/screenshots/Dashboard.gif)
![](https://github.com/turnerschumann/reflect/blob/README.md/screenshots/Reflection.gif)

Each day, users are prompted to fill out a "reflection" form. The app then uses natural language proccessing (via [Natural](https://github.com/NaturalNode/natural)) to analyze the text-sentiment behind the user's answers in order to produce a mood score. Additionally, this app tracks the user's computer productivity data through [RescueTime](https://www.rescuetime.com/). Reflect compiles these sets of data and present them as graphs on the dashboard. Users can then observe how their productivty affects their mood and vice versa.

## Features
* Users can fill out a "reflection" form 
  * Reflect then analyzes the text-sentiment and gives a mood score
* Users can track their productivity on their computer
* Users can track their time spent on categorized websites (i.e. Social Networking)
* Users can add post their daily activities
* Users can create a tasks list
* Users are able to observe graphs and insight cards that show the correlation of all collected datasets
* Users are able to look back on past "reflection" answers in Calendar

## Tech Stack

Back-end
* NodeJS
* Express
* Knex

Front-end
* React
* React-Router
* Axios

Database
* PostgreSQl

## Getting Started

This application requires **TWO** servers to run! Clone this repository to your desired directory and navigate to the directory.

#### Express-Back-End
1. `cd express-back-end`
2. `npm install`
3. `cp .env-example .env`
4. Update the .env file by filling in the database and RescueTime information
5. `npm start`

#### React-Front-End
1. `cd react-front-end`
2. `npm install`

Navigate to localhost:3000 to find your application.

## Dependencies
* NodeJS
* Express
* Knex
* DotENV
* Moment
* PostgeSQL
* Natural
* React
* React-Router
* AntDesign
* ChartJS
* Axios
* Cors

## Contributors

* [Liam Hetherington](https://github.com/Liamhetherington)
* [Nelson Yu](https://github.com/Nelson-Yu)
* [Turner Schumann](https://github.com/turnerschumann)
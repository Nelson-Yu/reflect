import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";

class MoodDisplay extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date_exists: true,
      mood: null,
      average: null,
    };
  }


  fetchMoodData = () => {
    axios
      .get("/api/mood/today")
      .then(response => {
        console.log(response.data.rank);
        if (response.data.rank.length !== 0) {
          this.setState({
            mood: response.data.rank[response.data.rank.length - 1]['rank'],
            date_exists: true
          });
        } else {
          this.setState({
            date_exists: false
        });
        }
        console.log("Does it exist" + this.state.date_exists)
    });
  }; 

  fetchAverageMoodData = () => {
    axios
      .get("/api/mood/weekly")
      .then(response => {
        const moodLastWeek = response.data
        let sum = 0;
        moodLastWeek.forEach(mood => {
          sum += mood.rank
          console.log(sum)
        })
        this.setState({
          average: Math.round(sum / 7).toFixed(1),
        })
        // console.log("average", this.state.average)
        // console.log("Does it exist" + this.state.date_exists)
      });
  }; 


  componentWillMount() {
    this.fetchMoodData();
    this.fetchAverageMoodData();
  }

  render() {
    const currentDate = moment().tz("America/Vancouver").format("YYYY-MM-DD");
    const moodRating = ((Math.round((this.state.mood) * 10)) / 10).toFixed(1);

    const colorBadge = () => {
      if (moodRating < 3.4) {
        return (
          <span className="badge-red">{moodRating}</span>
        )
      } else if (moodRating > 6.6){
        return (
          <span className="badge-green">{moodRating}</span>
        )
      } else {
        return (
          <span className="badge-yellow">{moodRating}</span>
        )
      }
    }

    const compareMood = () => {
      if (moodRating > this.state.average) {
        return (<>Nice! Today your mood rating is higher than your weekly average of {this.state.average}. Keep it up!</>)
      } else if (moodRating == this.state.average) {
        return (<>Not bad! Today your mood is the same as your weekly average of {this.state.average}. Way to be consistent!</>)
      } else if (moodRating < this.state.average) {
        return (<>Well, there's always tomorrow! Today your mood is lower than your weekly average of {this.state.average}. Let's have a better day tomorrow!</>)
      }
    }

    return ( 
      <>
        <div className="wrapper">
          {colorBadge()}
          <span className="mood-comparison">
            <strong>{currentDate}</strong>
            <br/>
            {compareMood()}
          </span>
        </div>
      </>
    )
  }
}

export default MoodDisplay;
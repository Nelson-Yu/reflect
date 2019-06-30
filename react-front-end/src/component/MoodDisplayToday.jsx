import React, { Component } from "react";
import axios from "axios";

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
    const moodRating = Math.round(this.state.mood).toFixed(1)

    const colorBadge = () => {
      if (moodRating < 5.0) {
        return (
          <div class="wrapper">
            <span class="badge-red">{moodRating}</span>
          </div>        
        )
      } else {
        return (
          <div class="wrapper">
            <span class="badge-green">{moodRating}</span>
          </div>  
        )
      }
    }

    return ( 
      <>
        {colorBadge()}
        <div>
          Today your mood is higher than your weekly average rating of {this.state.average}
        </div>
      </>
    )
  }
}

export default MoodDisplay;
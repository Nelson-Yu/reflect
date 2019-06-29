import React, { Component } from "react";
import axios from "axios";

class MoodDisplay extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      rank: null
    };
  }


  fetchMoodData = () => {
    axios
      .get("api/moods") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        const allData = response.data.score;
        const previousWeek = allData.slice(allData.length - 7);
        const mappedData = previousWeek.map(moodData => moodData.rank);
        console.log("previous week: ", previousWeek);
        const labelData = previousWeek.map(dateData => dateData.date);
        const dayOfWeek = labelData.map(weekDay => {
          return moment(weekDay)
            .add(1, "days")
            .format("dddd");
        });
        console.log("date:", dayOfWeek);
        console.log("array of dates", labelData);
        const moodRank = this.dashboardMoodChart.data(mappedData, dayOfWeek);
        this.setState({
          rank: moodRank
        });
      });
  };

  componentWillMount() {
    this.fetchMoodData();
  }

  
  render() {
    return (

    )
  }
}
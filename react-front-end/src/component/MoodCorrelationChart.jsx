import React, { Component } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

const chartOptions = {
  legend: {
    display: false,
    position: "top"
  }
};

class Correlations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pulse: null,
      mood: null
    };
  }

  dashboardMoodCorrelationChart = {
    data: (
      pulseData,
      // moodData,
      labels
    ) => {
      return {
        labels: labels.reverse(),
        datasets: [
          {
            data: [0, 1, 1, 3, 4, 3],
            // moodData.reverse(),
            fill: false,
            borderColor: "#fbc658",
            backgroundColor: "transparent",
            pointBorderColor: "#fbc658",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8
          },
          {
            data: pulseData.reverse(),
            fill: false,
            borderColor: "#51CACF",
            backgroundColor: "transparent",
            pointBorderColor: "#51CACF",
            pointRadius: 4,
            pointHoverRadius: 4,
            pointBorderWidth: 8
          }
        ]
      };
    }
  };

  fetchPulse = () => {
    axios
      .get("api/pulse") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        const mappedData = response.data.map(
          pulseMap => pulseMap.productivity_pulse / 10
        );
        const labelData = response.data.map(labelMap => labelMap.date);
        const dailyPulse = this.dashboardMoodCorrelationChart.data(
          mappedData,
          labelData
        );
        this.setState({
          pulse: dailyPulse
        });
      });
  };

  // fetchMood = () => {
  //   axios
  //     .get("api/moods") // You can simply make your requests to "/api/whatever you want"
  //     .then(response => {
  //       console.log("Responible response: ", response);
  //       // const mappedMoodData = response.score.map(moodMap => moodMap.rank);
  //       // console.log("Mood data: ", mappedMoodData);
  //       // const labelData = response.score.map(labelMap => labelMap.date);
  //       // console.log("Date: ", labelData);
  //       // const dailyMood = this.dashboardMoodCorrelationChart.data(
  //       //   mappedMoodData,
  //       //   labelData
  //       // );
  //       // this.setState({
  //       //   mood: dailyMood
  //       // });
  //     });
  // };

  componentWillMount() {
    this.fetchPulse();
    // && this.fetchMood();
  }

  render() {
    return (
      <>
        <Line
          data={
            this.state.pulse
            // && this.state.mood
          }
          options={chartOptions}
          width={400}
          height={100}
        />
      </>
    );
  }
}

export default Correlations;

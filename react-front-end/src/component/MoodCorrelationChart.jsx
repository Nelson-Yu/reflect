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
      pulse: null
    };
  }

  dashboardMoodCorrelationChart = {
    data: pulseData => {
      return {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        datasets: [
          {
            data: [0, 5, 2, 6, 10],
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
        console.log("Responible response: ", response);
        const mappedData = response.data.map(
          pulseMap => pulseMap.productivity_pulse
        );
        console.log("Response: ", mappedData);
        const dailyPulse = this.dashboardMoodCorrelationChart.data(mappedData);
        this.setState({
          pulse: dailyPulse
        });
      });
  };

  componentWillMount() {
    this.fetchPulse();
  }

  render() {
    return (
      <>
        <Line
          data={this.state.pulse}
          options={chartOptions}
          width={400}
          height={100}
        />
      </>
    );
  }
}

export default Correlations;

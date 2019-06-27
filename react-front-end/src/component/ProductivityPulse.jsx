import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";

const chartOptions = {
  legend: {
    display: true,
    position: "bottom"
  },

  tooltips: {
    enabled: true
    // callbacks: {
    //   label: function(productivityPercent, data) {
    //     const totalTime =
    //   }
    // }
  },

  pieceLabel: {
    render: "percentage",
    fontColor: ["white"],
    precision: 2
  },

  scales: {
    yAxes: [
      {
        ticks: {
          display: false
        },
        gridLines: {
          drawBorder: false,
          zeroLineColor: "transparent",
          color: "rgba(255,255,255,0.05)"
        }
      }
    ],

    xAxes: [
      {
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: "rgba(255,255,255,0.1)",
          zeroLineColor: "transparent"
        },
        ticks: {
          display: false
        }
      }
    ]
  }
};

class Productivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productivity: null
    };
  }

  dashboardProductivityChart = {
    data: canvas => {
      return {
        labels: [
          "Very Productive",
          "Productive",
          "Neutral",
          "Distracting",
          "Very Disctracting"
        ],
        datasets: [
          {
            label: "Productivity",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: [
              "Magenta",
              "#4acccd",
              "#fcc468",
              "#ef8157",
              "#e3e3e3"
            ],
            borderWidth: 0,
            data: canvas
          }
        ]
      };
    }
  };

  fetchProductivityData = () => {
    axios
      .get("/api/productivity_pulse") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        const mappedData = response.data.rows.map(RTdata => RTdata[1]);

        const overallTime = mappedData.reduce(
          (accumulator, currentValue, currentIndex, array) =>
            accumulator + currentValue
        );
        const productivityData = this.dashboardProductivityChart.data(
          mappedData
        );
        console.log("individual time", productivityData);
        console.log("Overall time", overallTime);
        this.setState({
          productivity: productivityData
        });
      });
  };

  componentWillMount() {
    this.fetchProductivityData();
  }

  render() {
    return (
      <div className="App">
        {this.state.productivity && (
          <Doughnut
            data={this.state.productivity}
            options={chartOptions}
            height={250}
          />
        )}
      </div>
    );
  }
}

export default Productivity;

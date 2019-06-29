import React, { Component } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import Spinner from "./loaders/Spinner";

const chartOptions = {
  legend: {
    display: true,
    position: "bottom"
  },

  tooltips: {
    enabled: true,
    callbacks: {
      label: function(productivityPercent, data) {
        const index = productivityPercent.index;
        const dataset = data.datasets[0].data;
        const percentage = dataset[index];
        return `${percentage.toFixed(2)}%`;
      }
    }
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
      productivity: null,
      loading: false
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
    this.setState({ loading: true }, () => {
      axios
        .get("/api/productivity") // You can simply make your requests to "/api/whatever you want"
        .then(response => {
          const mappedData = response.data.rows.map(RTdata => RTdata[1]);
          const overallTime = mappedData.reduce(
            (accumulator, currentValue, currentIndex, array) =>
              accumulator + currentValue
          );
          const dataPercentage = mappedData.map(i => (i / overallTime) * 100);
          const productivityData = this.dashboardProductivityChart.data(
            dataPercentage
          );
          setTimeout(() => {
            this.setState({
              productivity: productivityData,
              loading: false
            });
          }, 2000);
        });
    });
  };

  componentWillMount() {
    this.fetchProductivityData();
  }

  render() {
    const { loading } = this.state;
    return (
      <div className="Productivty-chart">
        {loading ? (
          <Spinner height={250} />
        ) : (
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

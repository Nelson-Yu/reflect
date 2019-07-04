import React, { Component } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";
import moment from "moment";
import Spinner from "./loaders/Spinner";

const chartOptions = {
  legend: {
    display: false
  },

  tooltips: {
    enabled: true,
    callbacks: {
      label: function(categoryTime, data) {
        const index = categoryTime.index;
        const dataset = data.datasets[categoryTime.datasetIndex].data;
        const time = dataset[index];
        const milliseconds = (time / 0.000277778) * 1000;
        const hours = moment.duration(milliseconds).asHours();
        console.log("Hours", hours);
        const hoursDown = Math.floor(hours);
        console.log("Rounded down", hoursDown);
        const minutes = moment.duration(milliseconds).minutes();
        return `${hoursDown.toFixed(0)}hr ${minutes}min`;
      }
    }
  },

  scales: {
    yAxes: [
      {
        ticks: {
          fontSize: 15
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Time Logged in Hours",
          fontSize: 18
        },
        ticks: {
          fontSize: 18
        }
      }
    ]
  },
  responsive: true,
  maintainAspectRatio: false

};

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: null,
      loading: false
    };
  }

  dashboardCategoryChart = {
    data: (categorizedData, labels) => {
      return {
        labels,
        datasets: [
          {
            backgroundColor: "#51cbcf",
            borderColor: "#51cbcf",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: categorizedData
          }
        ]
      };
    }
  };

  fetchCategoryData = () => {
    this.setState({ loading: true }, () => {
      axios
        .get("api/categories") // You can simply make your requests to "/api/whatever you want"
        .then(response => {
          const mappedData = response.data.rows.map(
            catData => catData[1] * 0.000277778
          );
          const labelData = response.data.rows.map(catData => catData[3]);
          const timeSpent = this.dashboardCategoryChart.data(
            mappedData,
            labelData
          );
          setTimeout(() => {
            this.setState({
              categoryData: timeSpent,
              loading: false
            });
          }, 1000);
        });
    });
  };

  // fetchLabelData = () => {
  //   axios
  //     .get("api/categories") // You can simply make your requests to "/api/whatever you want"
  //     .then(response => {
  //       const mappedData = response.data.rows.each(catData => catData[3]);
  //       const catLabels = this.dashboardCategoryChart.data(mappedData);
  //       this.setState({
  //         categoryData: catLabels
  //       });
  //     });
  // };

  componentWillMount() {
    this.fetchCategoryData();
  }

  render() {
    const { loading } = this.state;
    return (
      <div id="category-chart">
        {loading ? (
          <Spinner />
        ) : (
          <HorizontalBar
            data={this.state.categoryData}
            options={chartOptions}
            width={400}
            height={320}
          />
        )}
      </div>
    );
  }
}

export default Categories;

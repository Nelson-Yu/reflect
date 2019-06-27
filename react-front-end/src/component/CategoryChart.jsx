import React, { Component } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";
import moment from "moment";

const chartOptions = {
  legend: {
    display: false
  },

  tooltips: {
    enabled: true,
    callbacks: {
      label: function(categoryTime, data) {
        console.log("data", data);
        const index = categoryTime.index;
        console.log("Cat Time: ", categoryTime);
        const dataset = data.datasets[categoryTime.datasetIndex].data;
        const time = dataset[index];

        console.log("fdsafdsafdsafdsa", dataset);

        const formatted = moment(time * 1000).format("h:mm");
        return `${formatted}hrs`;
      }
    }
  },

  scales: {
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: "Time Logged in Hours"
        }
      }
    ]
  }
};

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryData: null
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
    axios
      .get("api/categories") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        const mappedData = response.data.rows.map(
          catData => catData[1]
          // * 0.000277778
        );
        const labelData = response.data.rows.map(catData => catData[3]);
        const timeSpent = this.dashboardCategoryChart.data(
          mappedData,
          labelData
        );
        this.setState({
          categoryData: timeSpent
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
    return (
      <>
        <HorizontalBar
          data={this.state.categoryData}
          options={chartOptions}
          width={400}
          height={300}
        />
      </>
    );
  }
}

export default Categories;

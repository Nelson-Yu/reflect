import React, { Component } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";

const chartOptions = {
  legend: {
    display: false
  },

  tooltips: {
    enabled: true,
    callbacks: {
      label: function(categoryPercent, data) {
        console.log("Daaattaaaaa: ", data);
        const index = categoryPercent.index;
        const dataset = data.datasets[0].data;
        const percentage = dataset[index];
        return `${percentage.toFixed(2)}%`;
      }
    }
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
            label: "Categories",
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
        console.log("FDSAFDSAFSDA", response.data.rows);
        const mappedData = response.data.rows.map(catData => catData[1]);
        const labelData = response.data.rows.map(catData => catData[3]);
        const overallTime = mappedData.reduce(
          (accumulator, currentValue, currentIndex, array) =>
            accumulator + currentValue
        );
        const dataPercentage = mappedData.map(i => (i / overallTime) * 100);
        const timeSpent = this.dashboardCategoryChart.data(
          dataPercentage,
          labelData
        );
        this.setState({
          categoryData: timeSpent
        });
      });
  };

  componentWillMount() {
    this.fetchCategoryData();
  }

  render() {
    return (
      <>
        <HorizontalBar
          data={this.state.categoryData}
          options={chartOptions}
          width={300}
          height={200}
        />
      </>
    );
  }
}

export default Categories;

import React, { Component } from "react";
import axios from "axios";
import { HorizontalBar } from "react-chartjs-2";

const chartOptions = {
  legend: {
    display: false
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

        const timeSpent = this.dashboardCategoryChart.data(
          mappedData,
          labelData
        );
        this.setState({
          categoryData: timeSpent
        });
      });
  };

  fetchLabelData = () => {
    axios
      .get("api/categories") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        console.log("FDSAFDSAFSDA", response.data.rows);
        const mappedData = response.data.rows.map(catData => catData[3]);
        const catLabels = this.dashboardCategoryChart.data(mappedData);
        this.setState({
          categoryData: catLabels
        });
      });
  };

  componentWillMount() {
    this.fetchCategoryData() && this.fetchCategoryData();
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

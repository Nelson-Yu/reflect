const dashboardMoodChart = {
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    datasets: [
      {
        label: "#Mood",
        backgroundColor: "#fbc757",
        borderColor: "#fbc757",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [5, 4, 3, 2, 1, 0, 3]
      }
    ]
  },
  options: {
    legend: {
      display: false
    }
  }
};

module.exports = {
  // dashboardproductivityChart,
  // dashboardMoodCorrelationChart,
  dashboardMoodChart
  // dashboardCategoryChart
};

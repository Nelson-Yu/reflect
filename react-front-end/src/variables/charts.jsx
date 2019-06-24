const dashboardproductivityChart = {
  data: canvas => {
    return {
      labels: ["Productive", "Distracting", "Neutral", "Unclassified"],
      datasets: [
        {
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ["#e3e3e3", "#4acccd", "#fcc468", "#ef8157"],
          borderWidth: 0,
          data: [342, 480, 530, 120]
        }
      ]
    };
  },
  options: {
    legend: {
      display: true
    },

    pieceLabel: {
      render: "percentage",
      fontColor: ["white"],
      precision: 2
    },

    tooltips: {
      enabled: false
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
  }
};

const dashboardMoodCorrelationChart = {
  data: {
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
        data: [0, 19, 15, 20, 30, 40, 40, 50, 25, 30, 50, 70],
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      },
      {
        data: [0, 5, 10, 12, 20, 27, 30, 34, 42, 45, 55, 63],
        fill: false,
        borderColor: "#51CACF",
        backgroundColor: "transparent",
        pointBorderColor: "#51CACF",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8
      }
    ]
  },
  options: {
    legend: {
      display: false,
      position: "top"
    }
  }
};

const dashboardMoodChart = {
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
      label: '#Mood',
      backgroundColor: '#fbc757',
      borderColor: '#fbc757',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [5, 4, 3, 2, 1, 0, 3]
    }]
  },
  options: {
    legend: {
      display: false
    }
  }
}

const dashboardCategoryChart = {
  data: {
    type: 'horizontalBar',
    labels: ['Reference & Learning', 'Powerline', 'News & Opinion', 'Business', 'Communication'],
    datasets: [{
      label: 'Categories',
      backgroundColor: '#51cbcf',
      borderColor: '#51cbcf',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [31, 14, 13, 12, 9]
    }]
  },
  options: {
    legend: {
      display: false
    }
  }
}

module.exports = {
  dashboardproductivityChart,
  dashboardMoodCorrelationChart,
  dashboardMoodChart,
  dashboardCategoryChart,
};
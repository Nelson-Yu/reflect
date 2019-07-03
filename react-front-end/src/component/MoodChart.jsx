import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import Spinner from "./loaders/Spinner";
import MoodDisplay from "./MoodDisplayToday";

const chartOptions = {
  legend: {
    display: false
  },
  xAxes: [
    {
      type: "date",
      length: 7
    }
  ],
  scales: {

    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          fontSize: 18
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          fontSize: 18
        }
      }
    ]
  },
  responsive: true,
  maintainAspectRatio: false

};

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rank: null,
      loading: false
    };
  }

  dashboardMoodChart = {
    data: (moodData, labels) => {
      return {
        labels,
        datasets: [
          {
            label: "Mood Rank",
            backgroundColor: "#fbc757",
            borderColor: "#fbc757",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: moodData
          }
        ]
      };
    }
  };

  fetchMoodData = () => {
    this.setState({ loading: true }, () => {
      axios
        .get("api/moods") // You can simply make your requests to "/api/whatever you want"
        .then(response => {
          const allData = response.data.score;
          const previousWeek = allData.slice(allData.length - 7);
          const mappedData = previousWeek.map(moodData => moodData.rank);
          console.log("previous week: ", previousWeek);
          const labelData = previousWeek.map(dateData => dateData.date);
          const dayOfWeek = labelData.map(weekDay => {
            return moment(weekDay)
              .add(1, "days")
              .format("dddd");
          });
          console.log("date:", dayOfWeek);
          console.log("array of dates", labelData);
          const moodRank = this.dashboardMoodChart.data(mappedData, dayOfWeek);
          setTimeout(() => {
            this.setState({
              rank: moodRank,
              loading: false
            });
          }, 2000);
        });
    });
  };

  componentWillMount() {
    this.fetchMoodData();
  }

  render() {
    const { loading } = this.state;
    return (
      <div id="mood-chart">
        {loading ? (
          <Spinner height={250} />
        ) : (
          <>
            <MoodDisplay />
            <div>
              <Bar
                data={this.state.rank}
                options={chartOptions}
                width={300}
                height={200}
              />
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Mood;

import React, { Component } from "react";
import axios from "axios";
import { builtinModules } from "module";

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col,
  Statistic
} from "antd";

const API_URL = "http://localhost:8080/api/productivity_pulse";

class Productivity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productivity: []
    };
    this.dashboardproductivityChart = {
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
              data: [0, 1, 2, 3, 5]
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
  }

  fetchProductivityData = () => {
    axios
      .get("/api/productivity_pulse") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log("Productivity data", response.data.rows); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          productivity: response.data
        });
      });
  };

  componentWillMount() {
    this.fetchProductivityData();
  }

  render() {
    console.log("State", this.state.productivity.rows);
    return (
      <div className="App">
        {/* {this.state.productivity.rows.map(
          productivityData =>
            `Productivity =  ${productivityData.productivity}, `
        )} */}
        Hello
      </div>
    );
  }
}

export default Productivity;

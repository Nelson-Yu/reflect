import React, { Component } from "react";
import axios from "axios";
import moment from 'moment-timezone';
import { ReactComponent as Robot } from "../assets/robot.svg"
import "../styles/Robot.css"


import {Card } from 'antd';

const current_date = moment().tz("America/Vancouver").format("YYYY-MM-DD");

class ReflectionResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(current_date),
      mood: "Calculating",
      loading: false,
    };
  }

  fetchData = () => {
    console.log("Mood fetch made")
    axios
      .get(`/api/archive/${this.state.date.format('YYYY-MM-DD')}`) // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log("Response is" + response.data.rank); // The entire response from the Rails API

        setTimeout(() => {
          if (response.data.rank.length !== 0) {
            this.setState({
              mood: response.data.rank[response.data.rank.length - 1]['rank'],
              loading: true
            });
          }
        }, 3000);
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { loading } = this.state

    return (
      <> 
      { (!loading) ? (
        <Card title = "Calculating" bordered={true} style={{ padding: "0 20px 0 20px", margin: "0 400px" }}>
          <div className="sentibot-submission">
            <p className="submission-text"> 
              <strong>SentiBOT Is Calculating...</strong>
            </p>
            <Robot/>
          </div>
          {/* Sentibot has given your response a score of {this.state.mood} */}
        </Card>
      ) : (
        <Card title = "SentiBOT Has Processed Your Reflection" bordered={true} style={{ padding: "0 20px 0 20px", margin: "0 400px" }}>
          <div className="sentibot-submission">
            <Robot/>
          </div>
          Sentibot has given your response a score of {this.state.mood}
        </Card>
      )}
      </>
    )
  }
}

export default ReflectionResult;
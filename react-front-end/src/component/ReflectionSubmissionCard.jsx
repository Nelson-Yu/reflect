import React, { Component } from "react";
import axios from "axios";
import moment from 'moment-timezone';
import { ReactComponent as Robot } from "../assets/robot.svg"
import "../styles/Robot.css"

import { CircularProgressbar } from "react-circular-progressbar"
import ChangingProgress from "./loaders/ChangingProgress"
import 'react-circular-progressbar/dist/styles.css'

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
    const moodRating = ((Math.round((this.state.mood) * 10)) / 10).toFixed(1);

    return (
      <> 
      { (!loading) ? (
        <Card bordered={true} style={{ padding: "0 20px 0 20px", margin: "0 400px" }}>
          <div className="sentibot-submission">
            <p className="submission-text"> 
              <strong>SentiBOT Is Calculating...</strong>
            </p>
            <Robot/>
            <ChangingProgress values={[0, 20, 40, 60, 80, 100]}>
              {percentage => (
                <CircularProgressbar value={percentage} text={`${percentage}%`}/>
              )}
            </ChangingProgress>
          </div>
        </Card>
      ) : (
        <Card bordered={true} style={{ padding: "0 20px 0 20px", margin: "0 400px" }}>
          <div className="sentibot-submission-score">
            <Robot/>
            <div class="submission-wrapper">
              <div className="submission-text"> 
                <p><strong>SentiBOT Calculated Your Mood:</strong></p>
                <p class="submission-badge">{moodRating}</p>
              </div>
              <br/>
            </div>
          </div>
        </Card>
      )}
      </>
    )
  }
}

export default ReflectionResult;
import React, { Component } from "react";
import axios from "axios";
import moment from 'moment-timezone';

import {Card } from 'antd';

const current_date = moment().tz("America/Vancouver").format("YYYY-MM-DD");

class ReflectionResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(current_date),
      mood: "Loading",
    };
  }

  fetchData = () => {
    axios
      .get(`/api/archive/${this.state.date.format('YYYY-MM-DD')}`) // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data.rank); // The entire response from the Rails API
        // console.log(response.data.message); // Just the message
        if (response.data.rank.length !== 0) {
          this.setState({
            mood: response.data.rank[response.data.rank.length - 1]['rank'],
          });
        }
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <>
        <Card title = "Your Reflection has been Submitted" bordered={true} style={{ padding: "0 20px 0 20px", margin: "0 200px 0 200px" }}>
          Sentibot has given your response a score of {this.state.mood}
        </Card>
      </>
    )
  }
}

export default ReflectionResult;
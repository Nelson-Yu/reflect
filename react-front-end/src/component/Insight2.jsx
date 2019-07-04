import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Icon } from "antd";
import Spinner from "./loaders/Spinner";

class ProductivityStreak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  }

  render() {
    const { loading } = this.state;

    return (
      <div id="insight2">
        {loading ? (
          <Spinner height={250} />
        ) : (
          <div className="insight-box">
          <div className="activity-div">
            <span className="top-activity-badge">
              <p className="mood-up">
                <strong>
                  5 Day Streak
                </strong>
              </p>
              <img src="https://img.icons8.com/ios/100/000000/positive-dynamic-filled.png" />
            </span>
          </div>
          <div className="activity-text-div">
            <p className="top-activity-text">
              <strong>Productivity Pulse</strong> has been above{" "}
              <strong>7.0</strong> for the last <strong>2 days</strong>. 
              Keep it up!
            </p>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default ProductivityStreak;

import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Icon } from "antd";
import Spinner from "./loaders/Spinner";

class WeeklyHours extends Component {
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
      <div id="insight3">
        {loading ? (
          <Spinner height={250} />
        ) : (          
          <div className="insight-box">
          <div className="activity-div">
            <span className="top-activity-badge">
              <p className="mood-up">
                <strong>
                  30+ Hours
                </strong>
              </p>
              <img src="https://img.icons8.com/ios/100/000000/laptop-application-filled.png" />
            </span>
          </div>
          <div className="activity-text-div">
            <p className="top-activity-text">
              This week you have logged <strong>30+</strong> hours on{" "}
              <strong>Software Development.</strong>
            </p>
          </div>
        </div>

        )}
      </div>
    );
  }
}

export default WeeklyHours;

import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Icon } from "antd";
import Spinner from "./loaders/Spinner";

class TaskCompletion extends Component {
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
      <div id="insight4">
        {loading ? (
          <Spinner height={250} />
        ) : (
        <div className="insight-box">
          <div className="activity-div">
            <span className="top-activity-badge">
              <p className="mood-up">
                <strong>
                  25 Tasks
                </strong>
              </p>
              <img src="https://img.icons8.com/ios/100/000000/checked-checkbox-filled.png" />
            </span>
          </div>
          <div className="activity-text-div">
            <p className="top-activity-text">
              You have completed <strong>25 tasks</strong> this week. Good job, let's finish the rest.
            </p>
          </div>
        </div>
        )}
      </div>
    );
  }
}

export default TaskCompletion;

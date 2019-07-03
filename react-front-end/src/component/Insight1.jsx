import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Icon } from "antd";
import Spinner from "./loaders/Spinner";

class TopActivity extends Component {
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
      <div id="insight1">
        {loading ? (
          <Spinner height={250} />
        ) : (
          <div className="insight-box">
            <div className="activity-div">
              <span className="top-activity-badge">
                <p className="mood-up">
                  <strong>
                    <Icon type="arrow-up" />
                    Mood
                  </strong>
                </p>
                <img src="https://img.icons8.com/ios/100/000000/friends-filled.png" />
              </span>
            </div>
            <div className="activity-text-div">
              <p className="top-activity-text">
                Your <strong>mood</strong> tends to be better when you{" "}
                <strong>socialize</strong> more.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default TopActivity;

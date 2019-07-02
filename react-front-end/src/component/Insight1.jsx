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
    }, 2000);
  }

  render() {
    const { loading } = this.state;

    return (
      <div id="insight1">
        {loading ? (
          <Spinner height={250} />
        ) : (
          <Row gutter={24}>
            <Col span={7} style={{ padding: "0px" }}>
              <span className="top-activity-badge">
                <p className="mood-up">
                  <strong>
                    <Icon type="arrow-up" />
                    Mood
                  </strong>
                </p>
                <img src="https://img.icons8.com/ios/100/000000/friends-filled.png" />
              </span>
            </Col>
            <Col span={17} style={{ padding: "0px" }}>
              <p className="top-activity-text">
                Your <strong>mood</strong> tends to be better when you{" "}
                <strong>socialize</strong> more.
              </p>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default TopActivity;

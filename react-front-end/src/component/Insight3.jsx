import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Icon } from "antd";
import Spinner from "./loaders/Spinner";

class WeeklyHours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
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
      <>
      {loading ? (
        <Spinner height={250} />
      ) : (
        <Row gutter={24}>
          <Col span={7} style={{padding: "0px"}}>
            <span className="weekly-badge">
              <p className="sofdev-up"><strong>5 Day Streak</strong></p>
              <img src="https://img.icons8.com/ios/100/000000/laptop-application-filled.png"/> 
            </span>
          </Col>
          <Col span={17} style={{padding: "0px"}}>
            <p className="weekly-text">This week you have logged <strong>30+</strong> hours on <strong>Software Development</strong></p>
          </Col>
        </Row>
      )}
      </>
    )
  }
}

export default WeeklyHours
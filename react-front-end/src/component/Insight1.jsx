import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Icon } from "antd";

class TopActivity extends Component {
  render() {
    return (
      <>
      <Row gutter={24}></Row>
        <Col span={7} style={{padding: "0px"}}>
          <span className="top-activity-badge">
            <p className="mood-up"><strong><Icon type="arrow-up" />Mood</strong></p>
            <img src="https://img.icons8.com/ios/100/000000/friends-filled.png"/> 
          </span>
        </Col>
        <Col span={17} style={{padding: "0px"}}>
          <p className="top-activity-text">Your <strong>mood</strong> tends to be better when you <strong>socialize</strong> more.</p>
        </Col>
      </>
    )
  }
}

export default TopActivity
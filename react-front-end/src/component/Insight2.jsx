import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Icon } from "antd";
import Spinner from "./loaders/Spinner";

class ProductivityStreak extends Component {
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
            <span className="productivity-badge">
              <p className="streak-up"><strong>5 Day Streak</strong></p>
              <img src="https://img.icons8.com/ios/100/000000/positive-dynamic-filled.png"/> 
            </span>
          </Col>
          <Col span={17} style={{padding: "0px"}}>
            <p className="productivity-text"><strong>Productivty Pulse</strong> has been above <strong>8.0</strong> for the last <strong>5 days</strong>. Keep it up!</p>
          </Col>
        </Row>
      )}
      </>
    )
  }
}

export default ProductivityStreak
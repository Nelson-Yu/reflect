import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";

import Activities from "./Activities"
import { Checkbox } from "./Checkbox";
import { ReactComponent as Robot } from "../../assets/robot.svg"
import { Activities3Days } from "./Activities3Days";
import "../../styles/Fitness.css";
import "../../styles/Robot.css"

import { Input, Form, Button, Radio, Card, Row, Col } from 'antd';

class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: Activities,
      showSubmit: true
    };
  }

  // fetchData = () => {
  //   axios
  //     .get("") // You can simply make your requests to "/api/whatever you want"
  //     .then(response => {
  //       // handle success
  //       // console.log(response.data.message); // Just the message
  //       this.setState({
  //       });
  //     });
  // };

  // componentDidMount() {
  //   this.fetchData();
  // }

  handleShow = () => {
    this.setState({
      showSubmit: false
    })
  } 


  handleCheck = (event) => {
    let activities = this.state.activities
    activities.forEach(activity => {
        if (activity.value === event.target.value)
          activity.isChecked =  event.target.checked
    })
    this.setState({activities: activities})
  }

  addActivty = event => {
    event.preventDefault();
    
    let data = ({
      exercises: this.state.activities
    })

    axios.post('http://localhost:8080/api/new-workouts', { data })
      .then (res => {
        console.log(res)
        console.log(res.data);
      });
  }

  render() {
    return (
      <Row gutter={24} style={{ margin: "0 24px 24px 24px" }}>
        <Col span={10}>
          <Card title = "Activities" bordered={true} >
            <form className="activity-form">
              { this.state.showSubmit ? (
                <>
                  <ul className="activity-container">
                  {
                    this.state.activities.map((activity) => {
                      return (<Checkbox handleCheck={this.handleCheck} {...activity}/>)
                    })
                  }
                  </ul>
                  <Button className="submit-activities" type="primary" onClick={(event) => {this.addActivty(event); this.handleShow(event); }}>Submit</Button>
                </>
                ) : (
                  <ul className="activity-container">
                  {
                    this.state.activities.map((activity) => {
                      return (<Checkbox {...activity}/>)
                    })
                  }
                  </ul>
                )}
            </form>
          </Card>
        </Col>
        <Col span={14}>
          <Card title="Activities For The Last 3 Days" bordered={true}>
            <Row gutter={24}>
              <Col span={8} className="sentibot-activities">
                <Robot/>
              </Col>
              <Col span={16}>
                <Activities3Days {...this.state.activities}/>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  };
}

export default ActivityForm;
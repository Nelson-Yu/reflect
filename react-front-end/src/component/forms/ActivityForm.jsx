import React, { Component } from "react";
import axios from "axios";
import "../../styles/Fitness.css";
import Activities from "./Activities"
import { Checkbox } from "./Checkbox";

import { Input, Form, Button, Radio, Card, Row, Col } from 'antd';

class ActivityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: Activities
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
          <Card title = "What Did You Do Today?" bordered={true} >
            <form className="activity-form">
              <ul className="activity-container">
              {
                this.state.activities.map((activity) => {
                  return (<Checkbox handleCheck={this.handleCheck} {...activity}/>)
                })
              }
              </ul>
              <Button className="submit-activities" type="primary" onClick={this.addActivty}>Submit</Button>
            </form>
          </Card>
        </Col>
        <Col span={14}>
          <Card title="Other Card" bordered={true}>
            Something for now
          </Card>
        </Col>
      </Row>
    );
  };
}

export default ActivityForm;
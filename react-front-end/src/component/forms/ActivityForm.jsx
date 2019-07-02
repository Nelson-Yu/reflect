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
      <Card bordered={true} style={{ padding: "0 2em", margin: "0% 25%" }}>
        <form className="activity-form">
            <>
              <ul className="activity-container">
                {
                  this.state.activities.map((activity) => {
                    return (<Checkbox handleCheck={this.handleCheck} {...activity}/>)
                  })
                }
              </ul>
              <Button className="submit-activities" type="primary" onClick={(event) => {this.props.action(event); this.addActivty(event); }}>Submit</Button>
            </>  
        </form>
      </Card>
    );
  };
}

export default ActivityForm;
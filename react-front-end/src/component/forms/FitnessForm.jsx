import React, { Component } from "react";
import axios from "axios";
import "../../styles/Fitness.css";
import Activities from "./Activities"

import { Input, Form, Button, Radio } from 'antd';
import { Checkbox } from "./Checkbox";

class Workout extends Component {
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
      <form className="fitness-form">
        <ul className="activity-container">
        {
          this.state.activities.map((activity) => {
            return (<Checkbox handleCheck={this.handleCheck} {...activity}/>)
          })
        }
        </ul>
        <button onClick={this.addActivty}>Submit</button>
      </form>
    );
  };
}

export default Workout;
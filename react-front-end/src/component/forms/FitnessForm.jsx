import React, { Component } from "react";
import axios from "axios";
import "../../styles/Fitness.css";


import { Input, Form, Button, Radio } from 'antd';
import { Checkbox } from "./Checkbox";

const { TextArea } = Input

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [
        {id: 'cb1', value: 'Running', image: "https://img.icons8.com/ios/100/000000/treadmill-filled.png", isChecked: false },
        {id: 'cb2', value: 'Biking', image: "https://img.icons8.com/ios/100/000000/cycling-road-filled.png", isChecked: false },
        {id: 'cb3', value: 'Workout', image: "https://img.icons8.com/ios/100/000000/bench-press-filled.png", isChecked: false },
        {id: 'cb4', value: 'Swimming', image: "https://img.icons8.com/ios/100/000000/swimming-filled.png", isChecked: false },
        {id: 'cb5', value: 'Yoga', image: "https://img.icons8.com/ios/100/000000/yoga-filled.png", isChecked: false },
      ]
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

  // handleCheck = event => {
  //   this.setState({ activity: event.target.value })
  // }

  // handleAnswer1 = event => {
  //   this.setState({ answer_1: event.target.value })
  // }
  
  // handleAnswer2 = event => {
  //   this.setState({ answer_2: event.target.value })
  // }
  
  // handleAnswer3 = event => {
  //   this.setState({ answer_3: event.target.value })
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
    console.log(data)

    axios.post('http://localhost:8080/api/new-workouts', { data })
      .then (res => {
        console.log(res)
        console.log(res.data);
      });
  }

  render() {
    return (
      <form>
        <ul>
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


// <form>
// <ul>
//   <li><input type="checkbox" id="cb1" value="Running" onClick={this.handleCheck}/>
//     <label for="cb1"><img src="https://img.icons8.com/ios/100/000000/high-jump-filled.png"/></label>
//   </li>
//   <li><input type="checkbox" id="cb2" value="Workout" onClick={this.handleCheck}/>
//     <label for="cb2"><img src="http://lorempixel.com/101/101" /></label>
//   </li>
//   <li><input type="checkbox" id="cb3" value="Basketball" onClick={this.handleCheck}/>
//     <label for="cb3"><img src="http://lorempixel.com/102/102" /></label>
//   </li>
//   <li><input type="checkbox" id="cb4" value="Hockey" onClick={this.handleCheck}/>
//     <label for="cb4"><img src="http://lorempixel.com/103/103" /></label>
//   </li>
// </ul>
// <button onClick={this.addActivty}>Submit</button>
// </form>

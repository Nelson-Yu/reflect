import React, { Component } from "react";
import axios from "axios";

import { Input, Form, Button, Radio } from 'antd';

const { TextArea } = Input

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  // handleEmoji = event => {
  //   this.setState({ emoji_rank: event.target.value })
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

  // addResponse = event => {
  //   event.preventDefault();
    
  //   let data = ({
  //   })

  //   axios.post('http://localhost:8080/api/new-reflection', { data })
  //     .then (res => {
  //       console.log(res)
  //       console.log(res.data);
  //     });

  // }

  render() {
    return (
      <>

      </>
    
    );
  }
}

export default Workout;

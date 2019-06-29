import React, { Component } from "react";
import axios from "axios";

class MoodDisplay extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      date_exists: true,
      mood: 0,
    };
  }


  fetchMoodData = () => {
    axios
      .get("/api/mood/today") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data.rank); // The entire response from the Rails API
        // console.log(response.data.message); // Just the message
        if (response.data.rank.length !== 0) {
          this.setState({
            mood: response.data.rank[response.data.rank.length - 1]['rank'],
            date_exists: true
          });
        } else {
          this.setState({
            date_exists: false
        });
        }
        console.log("Does it exist" + this.state.date_exists)
    });
  }; 

  componentWillMount() {
    this.fetchMoodData();
  }

  render() {
    return (
      <>
        <p>Mood: {this.state.mood}</p>
      </>
    )
  }
}

export default MoodDisplay;
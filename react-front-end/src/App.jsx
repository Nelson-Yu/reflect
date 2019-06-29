import React, { Component } from "react";
import { Switch } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";
import "antd/dist/antd.css";
import Siderbar from "./component/Sidebar";
import LandingPage from "./component/LandingPage";
// import API from "./API/API_helper.jsx";
import Productivity from "./component/ProductivityPulse";
import Animate from "rc-animate";

// import { CSSTransition } from 'react-transition-group';

const API_URL = "http://localhost:8080/api/daily_summary";

class App extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      message: "Click the button to load data!",
      info: [],
      loading: true,
      logged_in: false,
    };
  }

  handler() {
    this.setState({
      logged_in: true
    });
    console.log("Submission State" + this.state.logged_in)
  }

  fetchData = () => {
    const url = `${API_URL}`;
    axios
      .get(url) // You can simply make your requests to "/api/whatever you want"
      .then(response => response.data)
      .then(data => {
        this.setState({
          info: data,
          isLoading: false
        });
      });
  };

  componentDidMount() {
    // this.fetchData();
  }

  render() {
    const logged_in = this.state.logged_in;
    let card;

    if (logged_in) {
      card = <Siderbar/>
    } else {
      card = <LandingPage action={this.handler}/>
    }
    return (
      <>
        <Switch>
          {card}
        </Switch>
      </>
    );
  }
}

export default App;

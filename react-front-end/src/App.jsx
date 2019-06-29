import React, { Component } from "react";
import { Switch } from "react-router-dom";
import axios from "axios";
import "./styles/App.css";
import "antd/dist/antd.css";
import Siderbar from "./component/Sidebar";
import LandingPage from "./component/LandingPage";
// import API from "./API/API_helper.jsx";
import Productivity from "./component/ProductivityPulse";

const API_URL = "http://localhost:8080/api/daily_summary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!",
      info: [],
      isLoading: true
    };
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
    return (
      <>
        <Switch>
          <LandingPage />
          {/*<Siderbar />*/}
        </Switch>
      </>
    );
  }
}

export default App;

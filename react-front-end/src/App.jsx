import React, { Component } from "react";
import axios from "axios";
import "./styles/App.css";
import SideBar from "./component/Menu.jsx";

// const apiKey = "B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD";
const API_URL = "http://localhost:8080/api/daily_summary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.fetchData();
  }

  render() {
    return (
      <div>
        <nav className="Topnav">Welcome to Reflect Homie</nav>

        <menu>
          <SideBar />
        </menu>
        <div className="App">
          {this.state.info.map(
            RTdata =>
              `Software Dev =  ${
                RTdata.software_development_duration_formatted
              }, `
          )}
        </div>
      </div>
    );
  }
}

export default App;

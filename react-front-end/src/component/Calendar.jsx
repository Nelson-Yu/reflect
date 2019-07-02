import React, { Component } from "react";
import axios from "axios";
import moment from 'moment-timezone';


// import SideBar from "./Menu";
import Siderbar from "./Sidebar";

import { Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col,
  Calendar,
  Badge,
  Alert
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const current_date = moment().tz("America/Vancouver").format("YYYY-MM-DD");



function onPanelChange(value, mode) {
  console.log(value, mode);
}
class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment(current_date),
      selectedValue: moment(current_date),
      mode: "month",
      date_exists: true,
      mood: 0,
      answer_1: '',
      answer_2: '',
      answer_3: ''
    };
  }

  fetchData = () => {
    axios
      .get(`/api/archive/${this.state.value.format('YYYY-MM-DD')}`) // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        // console.log(this.state.date_exists); // The entire response from the Rails API
        // console.log(this.state.value.format('YYYY-MM-DD'));
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

  fetchResponseData = () => {
        console.log("Selected Date: " + this.state.value.format('YYYY-MM-DD'))
    axios
      .get(`/api/response/${this.state.value.format('YYYY-MM-DD')}`) // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API
        // console.log(response.data.message); // Just the message
        if (response.data.responses.length !== 0) {
          this.setState({
            answer_1: response.data.responses[response.data.responses.length -1]['answer1'],
            answer_2: response.data.responses[response.data.responses.length- 1]['answer2'],
            answer_3: response.data.responses[response.data.responses.length -1]['answer3'],
          });
        }
        // console.log("Does it exist" + this.state.date_exists)
      });
  };

  componentDidMount() {
    this.fetchData();
    this.fetchResponseData();
  }

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    }, () => { this.fetchData();
               this.fetchResponseData();
             }
    );

  };

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  render() {
    const currentDate = moment().tz("America/Vancouver").format("dddd, MMMM Do YYYY");
    const moodRating = ((Math.round((this.state.mood) * 10)) / 10).toFixed(1);

    const answers = () => {
      if (!this.state.date_exists) {
        console.log("data does not exist");
        return (
          <h4>No responses available for the specified date.</h4>
        )
      } else {
        console.log("data exists");

        return (
          <div>
            <h4>How was your day?</h4>
            <p>{this.state.answer_1}</p>
            <h4>What was the most impactful thing you did today?</h4>
            <p>{this.state.answer_2}</p>
            <h4>Is there anything exciting happening tomorrow?</h4>
            <p>{this.state.answer_3}</p>
          </div>
        )
      }
    }

    const colorBadge = () => {
      if (!this.state.date_exists) {
        return (
          <span className="badge-yellow">N/A</span>
        )
      }

      if (moodRating < 3.4) {
        return (
          <span className="badge-red">{moodRating}</span>
        )
      } else if (moodRating > 6.6){
        return (
          <span className="badge-green">{moodRating}</span>
        )
      } else {
        return (
          <span className="badge-yellow">{moodRating}</span>
        )
      }
    }

    return (
      <>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: "#fff", padding: 0, }}>
              <span className="page-header">Look Back On Your Past Reflections</span>
              <span className="page-date">{currentDate}</span>
            </Header>
            <div>
              <h3 className="R" style={{float: 'left', color: 'white', fontSize: "2.1em", width: "25px"  }}> R </h3>
              <h2 className="eflect" style={{float: 'left', color: "white", fontSize: "2.1em", width: "80%" }}> e f l e c t </h2>
            </div>
            <Content style={{ margin: "0 16px", borderTop: '1px solid #908884' }}>
              <div style={{ padding: "24px"}}>
                <h3> This Will Be The Calender</h3>
                <Card style={{ width: "60vh", border: '1px solid #d9d9d9', borderRadius: 4, float: 'left', }}>
           {/*       <Alert
                    message={`You selected date: ${this.state.selectedValue && this.state.selectedValue.format('YYYY-MM-DD')}`}
                  />*/}
                  <Calendar value={this.state.value} onSelect={this.onSelect} fullscreen={false} onPanelChange={this.onPanelChange}/>
                </Card>
                <div>
                  <Card title={`You selected date: ${this.state.selectedValue && this.state.selectedValue.format('YYYY-MM-DD')}`} bordered={false} style={{ width: 700, marginLeft: "5vw", float: 'left'}}>
                    <h4>Mood Rank: </h4>
                    <p>{colorBadge()}</p>
                    {answers()}
                  </Card>
                </div>
              </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Footer heheheh</Footer>
          </Layout>
      </>
    );
  }
}

export default Archive;

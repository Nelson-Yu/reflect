import React, { Component } from "react";
import axios from "axios";
import moment from 'moment';

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



function onPanelChange(value, mode) {
  console.log(value, mode);
}
class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: moment('2019-06-21'),
      selectedValue: moment('2019-06-21'),
      mode: "month",
      date_exists: true,
      mood: 0,
      question_1: '',
      question_2: '',
      question_3: ''
    };
  }

  fetchData = () => {
    axios
      .get(`/api/archive/${this.state.value.format('YYYY-MM-DD')}`) // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data.rank); // The entire response from the Rails API
        console.log(this.state.value.format('YYYY-MM-DD'));
        // console.log(response.data.message); // Just the message
        if (response.data.rank.length !== 0) {
          this.setState({
            mood: response.data.rank[response.data.rank.length -1]['rank'],
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

  componentDidMount() {
    this.fetchData();
  }

  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    });
    this.fetchData();
  };

  onPanelChange = (value, mode) => {
    console.log(value, mode);
  };

  render() {
    return (
      <>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} >
            <h3>Calender Page</h3>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Ol' Nelly</Breadcrumb.Item>
              </Breadcrumb>
              <h3> This Will Be The Calender</h3>
                <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4, float: 'left', }}>
           {/*       <Alert
                    message={`You selected date: ${this.state.selectedValue && this.state.selectedValue.format('YYYY-MM-DD')}`}
                  />*/}
                  <Calendar value={this.state.value} onSelect={this.onSelect} fullscreen={false} onPanelChange={this.onPanelChange}/>
                </div>,
                <div>
                  <Card title={`You selected date: ${this.state.selectedValue && this.state.selectedValue.format('YYYY-MM-DD')}`} bordered={false} style={{ width: 700, float: 'right'}}>
                    <h4>Mood Rank: </h4>
                    <p>{this.state.mood}</p>
                    <p>Card content</p>
                  </Card>
                </div>
            </Content>

            <Footer style={{ textAlign: 'center' }}>Footer heheheh</Footer>
          </Layout>
      </>
    );
  }
}

export default Archive;

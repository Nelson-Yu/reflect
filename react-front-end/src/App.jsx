import React, { Component } from "react";
import axios from "axios";
import "./styles/App.css";
import SideBar from "./component/Menu.jsx";
import Siderbar from "./component/sidebar.jsx";
import { Line, Pie } from "react-chartjs-2";

import { Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col,
} from 'antd';

import {
  dashboardproductivityChart,
  dashboardMoodCorrelationChart
} from "./variables/charts.jsx";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// const apiKey = "B63YHZRaIA5BoSVfNUxwB5r1iOZm7uPcPVICwOrD";
const API_URL = "http://localhost:8080/api/daily_summary";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
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
      <>
        <Layout style={{ minHeight: '100vh' }}>

            < Siderbar />

            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} >
              <h3>Welcome to your Dashboard</h3>
              </Header>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Ol' Nelly</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '##f0f2f5', minHeight: 360 }}>
              <Row gutter={16}>
                <Col span={8}>
                  <Card title="Productivity Chart" bordered={true}>
                    <Pie
                      data={dashboardproductivityChart.data}
                      options={dashboardproductivityChart.options}
                    />
                    <div className="legend">
                      <i className="fa fa-circle text-primary" /> Productive{" "}
                      <i className="fa fa-circle text-warning" /> Neutral{" "}
                      <i className="fa fa-circle text-danger" /> Unproductive{" "}
                      <i className="fa fa-circle text-gray" /> Unclassified
                    </div>
                  </Card>
                </Col>
                <Col span={16}>
                  <Card title="Mood Correlation Chart" bordered={true}>
                    <Line
                      data={dashboardMoodCorrelationChart.data}
                      options={dashboardMoodCorrelationChart.options}
                      width={400}
                      height={100}
                    />
                  </Card>
                </Col>
              </Row>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Footer heheheh</Footer>
            </Layout>
        </Layout>
      </>

}

export default App;

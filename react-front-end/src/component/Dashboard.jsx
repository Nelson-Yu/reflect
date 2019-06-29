import React, { Component } from "react";
import axios from "axios";
import Productivity from "./ProductivityPulse";
import Categories from "./CategoryChart";
import Correlations from "./MoodCorrelationChart";
import Mood from "./MoodChart";
import Tasks from "./Tasks";
import Spinner from "./loaders/Spinner";

import { Line, Pie, Bar, HorizontalBar } from "react-chartjs-2";

import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col,
  Statistic
} from "antd";

import {
  dashboardproductivityChart,
  dashboardMoodCorrelationChart,
  dashboardMoodChart,
  dashboardCategoryChart
} from "../variables/charts.jsx";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
    };
  }

  componentWillMount() {
    // this.fetchData();
  }

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          categories: response.data
        });
      });
  };

  render() {
    return (
      <>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: "#fff", padding: 0 }}>
            <h3>yeet</h3>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Ol' Nelly</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "black" }}>
              <Row gutter={24} style={{ margin: "0 0 24px 0" }}>
                <Col span={8}>
                  <Card title="Insight 1" bordered={true} className="card1">
                    <Statistic
                      title="Active"
                      value={11.28}
                      precision={2}
                      valueStyle={{ color: "#3f8600" }}
                      prefix={<Icon type="arrow-up" />}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Insight 2" bordered={true} className="card2">
                    <Statistic
                      title="Idle"
                      value={9.3}
                      precision={2}
                      valueStyle={{ color: "#cf1322" }}
                      prefix={<Icon type="arrow-down" />}
                      suffix="%"
                    />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card title="Insight 3" bordered={true} className="card3">
                    <Statistic
                      title="Yeeeeeeeeet"
                      value={69}
                      precision={2}
                      valueStyle={{ color: "purple" }}
                      prefix={<Icon type="dribbble" />}
                      suffix="%"
                    />
                  </Card>
                </Col>
              </Row>
              <Row gutter={24} style={{ margin: "0 0 24px 0" }}>
                <Col span={8}>
                  <Card title="Productivity Chart" bordered={true}>
                    <Productivity />
                  </Card>
                </Col>
                <Col span={16}>
                  <Card title="Mood Correlation Chart" bordered={true}>
                    <Correlations />
                  </Card>
                </Col>
              </Row>
              <Row gutter={24} style={{ margin: "0 0 24px 0" }}>
                <Col span={14}>
                  <Card title="Mood Chart" bordered={true}>
                    <Mood />
                  </Card>
                </Col>
                <Col span={10}>
                  <Card title="Category Chart" bordered={true}>
                    <Categories />
                  </Card>
                </Col>
              </Row>

              <Row gutter={24} style={{ margin: "0 0 24px 0" }}>
                <Col span={10}>
                  <Card title="Tasks" bordered={true}>
                    <Tasks />
                  </Card>
                </Col>
                <Col span={14} />
              </Row>
            </div>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Dashboard;

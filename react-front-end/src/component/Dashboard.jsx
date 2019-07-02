import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";
import Productivity from "./ProductivityPulse";
import Categories from "./CategoryChart";
import Correlations from "./MoodCorrelationChart";
import Mood from "./MoodChart";
import Tasks from "./Tasks";
import TopActivity from "./Insight1";
import ProductivityStreak from "./Insight2";
import WeeklyHours from "./Insight3";
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
  }

  render() {
    const currentDate = moment()
      .tz("America/Vancouver")
      .format("dddd, MMMM Do YYYY");

    return (
      <>
        <Layout style={{ marginLeft: 200, height: "1750px" }}>
          <Header style={{ background: "#fff", padding: 0 }}>
            <span className="page-header">
              <strong>Hi Nelson, Welcome To Reflect</strong>
            </span>
            <span className="page-date">{currentDate}</span>
          </Header>
          <Content style={{ margin: "0 16px", borderTop: "1px solid #908884" }}>
            <div style={{ padding: 24 }}>
              <Row gutter={48} style={{ margin: "0 0 48px 0" }}>
                <Col span={8}>
                  <Card bordered={true} style={{ height: "165px" }}>
                    <TopActivity />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true} style={{ height: "165px" }}>
                    <ProductivityStreak />
                  </Card>
                </Col>
                <Col span={8}>
                  <Card bordered={true} style={{ height: "165px" }}>
                    <WeeklyHours />
                  </Card>
                </Col>
              </Row>
              <Row gutter={48} style={{ margin: "0 0 48px 0" }}>
                <Col span={8}>
                  <Card
                    title="Productivity Pulse"
                    bordered={true}
                    style={{ height: "350px" }}
                  >
                    <Productivity />
                  </Card>
                </Col>
                <Col span={16}>
                  <Card
                    title="Mood-Productivity Correlation"
                    bordered={true}
                    style={{ height: "350px" }}
                    id="chart1"
                  >
                    <Correlations />
                  </Card>
                </Col>
              </Row>
              <Row gutter={48} style={{ margin: "0 0 48px 0" }}>
                <Col span={14}>
                  <Card
                    title="Weekly Mood"
                    bordered={true}
                    style={{ height: "420px" }}
                    id="chart1"
                  >
                    <Mood />
                  </Card>
                </Col>
                <Col span={10}>
                  <Card
                    title="Spotlight On Today"
                    bordered={true}
                    style={{ height: "330px" }}
                    id="chart1"
                  >
                    <Categories />
                  </Card>
                </Col>
              </Row>

              <Row gutter={48} style={{ margin: "0 0 48px 0" }}>
                <Col span={10}>
                  <Tasks />
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

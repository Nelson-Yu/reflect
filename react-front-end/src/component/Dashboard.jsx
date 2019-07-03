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
import TaskCompletion from "./Insight4";
import Spinner from "./loaders/Spinner";

import "../styles/Insights.css"
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
        <Layout style={{  marginLeft: 200, height: '1750px' }}>
          <Header>
            <span className="page-header" style={{ marginTop: '15px' }} >Hi Nelson, Welcome To Your Dashboard</span>
            <span className="page-date" style={{ marginTop: '15px' }} >{currentDate}</span>
          </Header>
          <div>
            <h3 className="R" style={{float: 'left', color: 'white', fontSize: "2.1em", width: "25px"  }}> R </h3>
            <h2 className="eflect" style={{float: 'left', color: "white", fontSize: "2.1em", width: "80%" }}> e f l e c t </h2>
          </div>
          <Content style={{ margin: "0 16px", borderTop: "1px solid #908884", paddingTop: "20px" }}>
            <div style={{ padding: 24 }}>


              <Row gutter={24} style={{ margin: "0 0 48px 0" }}>
                <Col span={16}>
                  <Row gutter={48} style={{ margin: "0 0 48px 0" }}>
                    <Col span={12}>
                      <Card bordered={true} style={{ height: "9em" }} className="insight-ant-card">
                        <TopActivity />
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card bordered={true} style={{ height: "9em" }} className="insight-ant-card">
                        <ProductivityStreak />
                      </Card>
                    </Col>
                  </Row>
                  <Row gutter={48} style={{ margin: "0 0 48px 0" }} >
                    <Col span={12}>
                      <Card bordered={true} style={{ height: "9em" }} className="insight-ant-card">
                        <WeeklyHours />
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card bordered={true} style={{ height: "9em" }} className="insight-ant-card">
                        <TaskCompletion />
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col span={8}>
                  <Tasks />
                </Col >
              </Row>


              <Row gutter={48} style={{ margin: "0 0 48px 0" }}>
                <Col span={8}>
                  <Card
                    title="Productivity Pulse"
                    bordered={true}
                    style={{ height: "450px" }}
                    id="chart1"
                  >
                    <Productivity />
                  </Card>
                </Col>
                <Col span={16}>
                  <Card
                    title="Mood-Productivity Correlation"
                    bordered={true}
                    style={{ height: "450px" }}
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
                    style={{ height: "420px" }}
                    id="chart1"
                  >
                    <Categories />
                  </Card>
                </Col>
              </Row>

            </div>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Dashboard;

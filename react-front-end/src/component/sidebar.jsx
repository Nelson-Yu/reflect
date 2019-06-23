import React, { Component } from "react";
// import { Line, Pie } from "react-chartjs-2";


import { Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col, } from 'antd';

// import {
//   dashboardEmailStatisticsChart,
// } from "./variables/charts.jsx";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Siderbar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Reflection</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  <span>Health</span>
                </span>
              }
            >
              <Menu.Item key="3">Fitness</Menu.Item>
              <Menu.Item key="4">Sleep</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );
  }
}

export default Siderbar;
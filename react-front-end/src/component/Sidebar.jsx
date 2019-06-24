import React, { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import "antd/dist/antd.css";

// import { Line, Pie } from "react-chartjs-2";

import Dashboard from './Dashboard';
import Reflection from './Reflection';
import Fitness from "./Fitness";
import Sleep from "./Sleep";

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

class Siderbar extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>

        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Dashboard</span>
              <Link to='/' />
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Reflection</span>
              <Link to='/reflection' />
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
              <Menu.Item key="3">Fitness<Link to='/fitness' /></Menu.Item>
              <Menu.Item key="4">Sleep<Link to='/sleep' /></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Content style={{background: '#fff', minHeight: 280 }}>
            <Route exact path="/" component={Dashboard} />
            <Route path="/reflection" component={Reflection} />
            <Route path="/fitness" component={Fitness} />
            <Route path="/sleep" component={Sleep} />            
        </Content>

      </Layout>
    );
  }
}

export default Siderbar;
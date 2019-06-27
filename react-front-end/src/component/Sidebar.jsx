import React, { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';

// import { Line, Pie } from "react-chartjs-2";

import Dashboard from './Dashboard';
import Reflection from './Reflection';
import Fitness from "./Fitness";
import Tasks from "./Tasks";
import Archive from "./Calendar";

import { Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col,
  Calendar, } from 'antd';

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
      <Layout>
{/*        <Header className="header" style={{background: 'white', paddingLeft: 0 }}>
          <div style={{background: 'red', width: 200, float: 'left', paddingLeft: 20}}>
            <h3 >
              REFLECT
            </h3>
          </div>
          <div style={{color: 'black', float: 'left', paddingLeft: 20}}>
            <h3>Welcome to your Dashboard</h3>
          </div>
        </Header>*/}

        <Layout>

          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            trigger={null}
            style={{
              overflow: 'hidden',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
            >

            <div className="logo" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="6" style={{height:100 }}>
                <span>Reflect</span>
                <Link to='/' />
              </Menu.Item>
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
              <Menu.Item key="3">
                <Icon type="unordered-list" />
                <span>Tasks</span>
                <Link to='/tasks' />
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user" />
                <span>Fitness</span>
                <Link to='/fitness' />
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="calendar" />
                <span>Calender</span>
                <Link to='/calender' />
              </Menu.Item>
            </Menu>
          </Sider>

          <Content style={{background: '#fff', minHeight: 280 }}>
              <Route exact path="/" component={Dashboard} />
              <Route path="/reflection" component={Reflection} />
              <Route path="/fitness" component={Fitness} />
              <Route path="/tasks" component={Tasks} />
              <Route path="/calender" component={Archive} />
          </Content>

        </Layout>
      </Layout>
    );
  }
}

export default Siderbar;
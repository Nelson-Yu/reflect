import React, { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';

// import { Line, Pie } from "react-chartjs-2";

import Dashboard from './Dashboard';
import Reflection from './Reflection';
import Activity from "./Activity";
import Archive from "./Calendar";
import Settings from "./Settings";

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
              background: 'linear-gradient(45deg, #0b0a0a, #66615a)',
              overflow: 'hidden',
              height: '100vh',
              position: 'fixed',
              left: 0,
            }}
            >

            <div className="logo" style={{color: "white", fontSize: "30px", textAlign: "center", paddingBottom: '20px'}}> REFLECT </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ background: 'transparent' }}>
              <Menu.Item key="1" style={{marginBottom: '15px' }} >
                <Icon style={{ fontSize: '20px'}} type="pie-chart" />
                <span style={{ fontSize: '130%'}} >Dashboard</span>
                <Link to='/' />
              </Menu.Item>
              <Menu.Item key="2" style={{marginBottom: '15px' }} >
                <Icon style={{ fontSize: '20px'}} type="desktop" />
                <span style={{ fontSize: '130%'}} >Reflection</span>
                <Link to='/reflection' />
              </Menu.Item>
              <Menu.Item key="3" style={{marginBottom: '15px' }} >
                <Icon style={{ fontSize: '20px'}} type="user" />
                <span style={{ fontSize: '130%'}} >Activities</span>
                <Link to='/activity' />
              </Menu.Item>
              <Menu.Item key="4" style={{marginBottom: '15px' }}>
                <Icon style={{ fontSize: '20px'}} type="calendar" />
                <span style={{ fontSize: '130%'}} >Calender</span>
                <Link to='/calender' />
              </Menu.Item>
              <Menu.Item key="5" style={{marginBottom: '15px' , marginTop: '58vh' }} >
                <Icon style={{ fontSize: '20px'}} type="setting" />
                <span style={{ fontSize: '130%'}} >Settings</span>
                <Link to='/settings' />
              </Menu.Item>
              <Menu.Item key="6" style={{marginBottom: '15px' }} >
                <Icon style={{ fontSize: '20px'}} type="logout" />
                <span style={{ fontSize: '130%'}} >Logout</span>
                <Link to='/' />
              </Menu.Item>
            </Menu>
          </Sider>

          <Content style={{background: '#fff', minHeight: 280 }}>
              <Route exact path="/" component={Dashboard} />
              <Route path="/reflection" component={Reflection} />
              <Route path="/activity" component={Activity} />
              <Route path="/calender" component={Archive} />
              <Route path="/settings" component={Settings} />
          </Content>

        </Layout>
      </Layout>
    );
  }
}

export default Siderbar;
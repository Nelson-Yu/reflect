import React, { Component } from "react";
import axios from "axios";
import moment from 'moment-timezone';


import SettingsForm from "./forms/SettingsForm"

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

const { Header, Content, Footer, Sider } = Layout;

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentDate = moment().tz("America/Vancouver").format("dddd, MMMM Do YYYY");

    return (
      <>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: "#fff", padding: 0, }}>
            <span className="page-header"><strong>Update Your Profile</strong></span> 
            <span className="page-date">{currentDate}</span>
          </Header>
          <Content style={{ margin: "0 16px", borderTop: '1px solid #908884' }}>
            <div style={{ padding: "24px"}}>            
              <SettingsForm/>
            </div>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Settings;

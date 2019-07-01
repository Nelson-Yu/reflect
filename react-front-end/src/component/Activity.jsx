import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";

import ActivityForm from "./forms/ActivityForm";

import { Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col,
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class Activity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const currentDate = moment().tz("America/Vancouver").format("dddd, MMMM Do YYYY");

    return (
      <>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: "#fff", padding: 0, }}>
              <span className="page-header"><strong>What Did You Do Today?</strong></span> 
              <span className="page-date">{currentDate}</span>
            </Header>
            <Content style={{ margin: "0 16px", borderTop: '1px solid #908884' }}>
              <div style={{ padding: "24px"}}>
                <ActivityForm/>
              </div>
            </Content>
          </Layout>
      </>
    );
  }
}

export default Activity;

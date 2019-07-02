import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";

import { Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col,
} from 'antd';

import ReflectionForm from "./forms/ReflectionForm"
import ReflectionResult from "./ReflectionSubmissionCard"

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Reflection extends Component {
  constructor(props) {
    super(props);

    this.handler = this.handler.bind(this);

    this.state = {
      submitted: false
    };
  }
  
  handler() {
    this.setState({
        submitted: true
    });
    console.log("Submission State" + this.state.submitted)
  }

  render() {
    const currentDate = moment().tz("America/Vancouver").format("dddd, MMMM Do YYYY");
    const submitted = this.state.submitted;
    let card;

    if (submitted) {
      card = <ReflectionResult/>
    } else {
      card = <ReflectionForm action={this.handler}/>
    }
    return (
      <>
        <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: "#fff", padding: 0, }}>
              <span className="page-header"><strong>Time To Reflect!</strong></span> 
              <span className="page-date">{currentDate}</span>
            </Header>
          <Content style={{ margin: "0 16px", borderTop: '1px solid #908884' }}>
            <div style={{ padding: "24px"}}>
              {card}
            </div>
          </Content>
        </Layout>
      </>
    );
  }
}

export default Reflection;

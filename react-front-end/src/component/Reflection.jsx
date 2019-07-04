import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";
import "../styles/Reflection.css"

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
            <Header >
              <span className="page-header">Reflect On Today</span>
              <span className="page-date">{currentDate}</span>
            </Header>
            <div>
              <h3 className="R" style={{float: 'left', color: 'white', fontSize: "2.1em", width: "25px"  }}> R </h3>
              <h2 className="eflect" style={{float: 'left', color: "white", fontSize: "2.1em", width: "80%" }}> e f l e c t </h2>
            </div>
          <Content style={{ margin: "0 16px", borderTop: '1px solid #908884', paddingTop: "20px" }}>
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

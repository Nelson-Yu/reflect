import React, { Component } from "react";
import axios from "axios";

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

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.message); // Just the message
        this.setState({
          message: response.data.message
        });
      });
  };

  render() {
    const submitted = this.state.submitted;
    let card;

    if (submitted) {
      card = <ReflectionResult/>
    } else {
      card = <ReflectionResult/>

      // card = <ReflectionForm action={this.handler}/>
    }
    return (
      <>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} >
          <h3>Reflection Page</h3>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Ol' Nelly</Breadcrumb.Item>
            </Breadcrumb>
            {/*<ReflectionForm action={this.handler}/>*/}
            {card}
            {/* <Robot/> */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Footer heheheh</Footer>
        </Layout>
      </>
    );
  }
}

export default Reflection;

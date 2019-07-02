import React, { Component } from "react";
import axios from "axios";
import moment from "moment-timezone";

import Activities from "./forms/Activities";
import ActivityForm from "./forms/ActivityForm";
import { Activities3Days } from "./forms/Activities3Days";

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
    this.state = {
      activities: Activities,
      submitted: false
    }
  }

  submissionHandler = () => {
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
      card = <Activities3Days {...this.state.activities}/>
    } else {
      // card = <Activities3Days {...this.state.activities}/>
      card = <ActivityForm action={this.submissionHandler}/>
    }

    return (
      <>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: "#fff", padding: 0, }}>
              <span className="page-header"><strong>What Did You Do Today?</strong></span> 
              <span className="page-date">{currentDate}</span>
            </Header>
            <Content style={{ margin: "0 16px", borderTop: '1px solid #908884' }}>
              <div style={{ padding: "24px"}}>
                {/* <ActivityForm/> */}
                {card}
              </div>
            </Content>
          </Layout>
      </>
    );
  }
}

export default Activity;

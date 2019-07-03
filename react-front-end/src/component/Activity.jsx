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
            <Header >
              <span className="page-header">What Did You Do Today?</span>
              <span className="page-date">{currentDate}</span>
            </Header>
            <div>
              <h3 className="R" style={{float: 'left', color: 'white', fontSize: "2.1em", width: "25px"  }}> R </h3>
              <h2 className="eflect" style={{float: 'left', color: "white", fontSize: "2.1em", width: "80%" }}> e f l e c t </h2>
            </div>
            <Content style={{ margin: "0 16px", borderTop: '1px solid #908884', paddingTop: "20px" }}>
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

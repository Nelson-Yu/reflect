import React, { Component } from "react";
import axios from "axios";

// import SideBar from "./Menu";
import Siderbar from "./Sidebar";

import { Layout,
  Menu,
  Breadcrumb,
  Icon,
  Card,
  Row,
  Col,
  Calendar,
  Badge
} from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
      ];
      break;
    case 10:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
        { type: 'success', content: 'This is usual event.' },
        { type: 'error', content: 'This is error event.' },
      ];
      break;
    case 15:
      listData = [
        { type: 'warning', content: 'This is warning event' },
        { type: 'success', content: 'This is very long usual event。。....' },
        { type: 'error', content: 'This is error event 1.' },
        { type: 'error', content: 'This is error event 2.' },
        { type: 'error', content: 'This is error event 3.' },
        { type: 'error', content: 'This is error event 4.' },
      ];
      break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {listData.map(item => (
        <li key={item.content}>
          <Badge status={item.type} text={item.content} />
        </li>
      ))}
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

class Archive extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     message: "Click the button to load data!"
  //   };
  // }

  // fetchData = () => {
  //   axios
  //     .get("/api/data") // You can simply make your requests to "/api/whatever you want"
  //     .then(response => {
  //       // handle success
  //       console.log(response.data); // The entire response from the Rails API

  //       console.log(response.data.message); // Just the message
  //       this.setState({
  //         message: response.data.message
  //       });
  //     });
  // };

  render() {
    return (
      <>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} >
            <h3>Calender Page</h3>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Ol' Nelly</Breadcrumb.Item>
              </Breadcrumb>
              <h3> This Will Be The Calender</h3>
              <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
            </Content>
            
            <Footer style={{ textAlign: 'center' }}>Footer heheheh</Footer>
          </Layout>
      </>
    );
  }
}

export default Archive;

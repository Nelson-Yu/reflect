import React, { Component } from "react";
import landingscene from '../assets/landing-scene.png';
import leaftopleft from '../assets/leaf-top-left.png';
import leaftopright from '../assets/leaf-top-right.png';
import leafbottomleft from '../assets/leaf-bottom-left.png';
import leafbottomright from '../assets/leaf-bottom-right.png';
import "../styles/LandingPage.css"

import { Link, Switch, Route } from 'react-router-dom';

import {
  Layout,
  Form,
  Icon,
  Input,
  Button,
  Checkbox,
  Radio,
  Card, } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;
    return (
      <Layout>
        <Header className="header" style={{background: '#66615a', paddingLeft: '20px', fontSize: '200%', fontWeight: '800', color: 'white', height: '100px'}}>
          Reflect
        </Header>
 {/*       <div style={{ float: 'left' }}>
          <img src={landingscene} alt="LandingScene" style={{ float: 'left' }} />
        </div>*/}
        <div style={{background: '#f4f3ee', height: '100%'}}>
          <div style={{ float: 'left', margin: "0 0 0 0",width: '100px' }}>
            <img src={leaftopleft} alt="LeafTopLeft" style={{width: '100%', height: 'auto'}} />
          </div>
          <div style={{margin: "0 0 0 0",width: '75px', position: 'absolute', bottom: '0px' }}>
            <img src={leafbottomleft} alt="LeafBottomeLeft" style={{width: '100%', height: 'auto'}} />
          </div>
          <div style={{ margin: "0 0 0 0",width: '100px', position: 'absolute', bottom: '0px', right: '0px' }}>
            <img src={leafbottomright} alt="LeafBottomeRight" style={{width: '100%', height: 'auto'}} />
          </div>
          <div style={{ float: 'left', margin: "130px 0 0 200px", width: '60vh' }}>
            <img src={landingscene} alt="LandingScene" style={{width: '100%', height: 'auto'}} />
          </div>
          <div style={{ float: 'right', margin: "0 0 0 0",width: '150px' }}>
            <img src={leaftopright} alt="LeafTopright" style={{width: '100%', height: 'auto'}} />
          </div>
          <Card title = "Login" bordered={true} style={{ padding: "0 0px 0 0px", margin: "20vh 200px 0 100px", width: 400, float: 'right'}}>
            <Form layout={formLayout} style={{ margin: "0 45px 0 20px"}}>
              <Form.Item  {...formItemLayout} style={{ margin: "0 25px 0 20px"}}>
                <Input placeholder="Username" style={{width: '265px', margin: "0 25px 0 0px"}}/>
              </Form.Item>
              <Form.Item  {...formItemLayout} style={{ margin: "0 25px 0 20px"}}>
                <Input placeholder="Password" type="password" style={{ width: '265px', margin: "0 25px 0 0px"}}/>
              </Form.Item>
              <Checkbox style={{ padding: "0 20px 0 18px"}}> Remember me </Checkbox>
              <a className="login-form-forgot" href="" style={{ color: '#42d0ce'}}> Forgot password </a>
              <Form.Item {...buttonItemLayout} style={{ width: "100px", margin: "20px 0 20px 0" }}>
                <Button type="primary" onClick={(event) => {this.props.action(event); }}>Submit</Button>
              </Form.Item>
              <a href="" style={{ float: 'left', margin: "0 0 0 20px", color: '#42d0ce'}}>Or register now!</a>
            </Form>
          </Card>
        </div>
{/*        <Footer className="footer" style={{background: 'white'}}>
        </Footer>*/}
      </Layout>
    );
  }
}

export default LandingPage;


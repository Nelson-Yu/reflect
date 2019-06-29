import React, { Component } from "react";
import axios from "axios";
import "../../styles/Settings.css";

import {
  Card,
  Form,
  Input,
  Icon,
  Button,
} from 'antd';

class SettingsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      formLayout: 'horizontal',
    };
  }

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
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
      <Card title="Settings" bordered={true} style={{ padding: "0 40px", margin: "0 250px" }}>
        <div> Connect To RescueTime: <img className="rt-logo" src="https://www.rescuetime.com/images/rescuetime-logo-black-type.svg"/></div>
        <br/>
        <p> Edit Your Profile:</p>  
        <div>
          <Form layout={formLayout}>
            <Form.Item label="Name" {...formItemLayout}>
              <Input placeholder="Change Name" />
            </Form.Item>
            <Form.Item label="Username" {...formItemLayout}>
              <Input placeholder="Change Username" />
            </Form.Item>
            <Form.Item label="E-mail" {...formItemLayout}>
              <Input placeholder="Change E-mail" />
            </Form.Item>
            <Form.Item label="Password" {...formItemLayout}>
              <Input placeholder="Change Password" />
            </Form.Item>
            <Form.Item label="Confirm Password" {...formItemLayout}>
              <Input placeholder="Confirm Password Change" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    );
  }
}

export default SettingsForm;

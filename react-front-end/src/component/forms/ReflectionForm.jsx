import React, { Component } from "react";
import axios from "axios";

import { Input, Form, Button, Radio } from 'antd';

const { TextArea } = Input

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: 'horizontal',
    };
  }

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
    const { formLayout } = this.state;
    const formItemLayout =
      formLayout === 'vertical'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : null;
    const buttonItemLayout =
      formLayout === 'vertical'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : null;
    return (
      <>
        <Form layout={formLayout}>
          <div>
            <Radio.Group size="large">
              <Radio.Button value="-1"><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
              <Radio.Button value="-0.5"><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
              <Radio.Button value="0"><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
              <Radio.Button value="0.5"><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
              <Radio.Button value="1"><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
            </Radio.Group>
          </div>

          <Form.Item label="Field A" {...formItemLayout}>
            <TextArea 
            placeholder="input placeholder" 
            autosize={{ minRows: 2, maxRows: 4 }}/>
          </Form.Item>
          <Form.Item label="Field B" {...formItemLayout}>
            <TextArea 
            placeholder="input placeholder" 
            autosize={{ minRows: 2, maxRows: 4 }}/>
          </Form.Item>
          <Form.Item label="Field C" {...formItemLayout}>
            <TextArea 
            placeholder="input placeholder" 
            autosize={{ minRows: 2, maxRows: 4 }}/>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Submit</Button>
          </Form.Item>
        </Form>
      </>
    
    );
  }
}

export default Answer;

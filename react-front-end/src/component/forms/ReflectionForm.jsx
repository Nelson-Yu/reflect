import React, { Component } from "react";
import axios from "axios";

import { Input, Form, Button, Radio } from 'antd';

const { TextArea } = Input

class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: 'horizontal',
      emoji_rank: null,
      answer_1: '',
      answer_2: '',
      answer_3: ''
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

  handleEmoji = event => {
    this.setState({ emoji_rank: event.target.value })
  }

  handleAnswer1 = event => {
    this.setState({ answer_1: event.target.value })
  }
  
  handleAnswer2 = event => {
    this.setState({ answer_2: event.target.value })
  }
  
  handleAnswer3 = event => {
    this.setState({ answer_3: event.target.value })
  }

  addResponse = event => {
    event.preventDefault();
    
    let data = ({
      emoji_rank: this.state.emoji_rank,
      answer_1: this.state.answer_1,
      answer_2: this.state.answer_2,
      answer_3: this.state.answer_3
    })

    axios.post('http://localhost:8080/api/new-reflection', { data })
      .then (res => {
        console.log(res)
        console.log(res.data);
      });

  }

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
          <Form.Item>
            <Radio.Group size="large" >
              <Radio.Button value="-1" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'}/></Radio.Button>
              <Radio.Button value="-0.5" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
              <Radio.Button value="0" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
              <Radio.Button value="0.5" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
              <Radio.Button value="1" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Emoji_with_Smiling_Eyes_large.png?v=1480481060'} /></Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item label="Field A" {...formItemLayout}>
            <TextArea 
            placeholder="input placeholder" 
            onChange={this.handleAnswer1}
            autosize={{ minRows: 2, maxRows: 4 }}/>
          </Form.Item>
          <Form.Item label="Field B" {...formItemLayout}>
            <TextArea 
            placeholder="input placeholder" 
            onChange={this.handleAnswer2}
            autosize={{ minRows: 2, maxRows: 4 }}/>
          </Form.Item>
          <Form.Item label="Field C" {...formItemLayout}>
            <TextArea 
            placeholder="input placeholder" 
            onChange={this.handleAnswer3}
            autosize={{ minRows: 2, maxRows: 4 }}/>
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" onClick={this.addResponse}>Submit</Button>
          </Form.Item>
        </Form>
      </>
    
    );
  }
}

export default Answer;

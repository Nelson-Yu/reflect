import React, { Component } from "react";
import axios from "axios";
import { ReactComponent as Robot } from "../../assets/robot.svg"
import "../../styles/Robot.css"


import { Input, Form, Button, Radio, Card, Row, Col } from 'antd';

const { TextArea } = Input


class Answer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: 'horizontal',
      emoji_rank: null,
      answer_1: 'hola',
      answer_2: 'heyo',
      answer_3: 'asuh'
    };
  }

  fetchData = () => {
    axios
      .get("/api/questions") // You can simply make your requests to "/api/whatever you want"
      .then(response => {
        // handle success
        console.log(response.data.questions[0]['question']); // The entire response from the Rails API
        // console.log(response.data.message); // Just the message
        this.setState({
          question_1: response.data.questions[0]['question'],
          question_2: response.data.questions[1]['question'],
          question_3: response.data.questions[2]['question']
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }


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

    // console.log("The function ran");

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
        <Card bordered={true} style={{ padding: "0 1.2em", margin: "0 15em" }}>
          <Row gutter={24}>
            <Col span={8} className="sentibot-form">
              <Robot />
            </Col>
            <Col span={16}>
              <Form layout={formLayout} className="reflection-form">
                <Form.Item >
                  <Radio.Group size="large" >
                    <Radio.Button value="-1" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://image.flaticon.com/icons/svg/187/187146.svg'}/></Radio.Button>
                    <Radio.Button value="-0.5" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://image.flaticon.com/icons/svg/187/187143.svg'} /></Radio.Button>
                    <Radio.Button value="0" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://image.flaticon.com/icons/svg/187/187136.svg'} /></Radio.Button>
                    <Radio.Button value="0.5" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://image.flaticon.com/icons/svg/187/187142.svg'} /></Radio.Button>
                    <Radio.Button value="1" onClick={this.handleEmoji}><img className="ant-menu-item" src={'https://image.flaticon.com/icons/svg/187/187159.svg'} /></Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item {...formItemLayout}>
                  <p>How was your day?</p>
                  <TextArea
                  placeholder="input placeholder"
                  onChange={this.handleAnswer1}
                  autosize={{ minRows: 2, maxRows: 4 }}
                  />
                </Form.Item>
                <Form.Item {...formItemLayout}>
                  <p>What was the most impactful thing you did today?</p>
                  <TextArea
                  placeholder="input placeholder"
                  onChange={this.handleAnswer2}
                  autosize={{ minRows: 2, maxRows: 4 }}/>
                </Form.Item>
                <Form.Item {...formItemLayout}>
                  <p>Is there anything exciting happening tomorrow?</p>
                  <TextArea
                  placeholder="input placeholder"
                  onChange={this.handleAnswer3}
                  autosize={{ minRows: 2, maxRows: 4 }}/>
                </Form.Item>
                <Form.Item {...buttonItemLayout}>
                  <Button type="primary" onClick={(event) => {this.props.action(event); this.addResponse(event); }}>Submit</Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Card>
      </>

    );
  }
}

export default Answer;

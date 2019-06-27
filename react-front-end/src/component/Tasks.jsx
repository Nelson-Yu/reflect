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

import ToDo from "./tasks/ToDo"
import AddToDo from "./tasks/AddToDo"


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
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

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todo: res.data }))
  }

  markComplete = id => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    });
  }

  deleteTask = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todo: [...this.state.todo.filter(task => task.id !== id)]
      }));
  }

  addToDo = title => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then(res => this.setState({
        todo: [...this.state.todo, res.data]
      }));
  }


  render() {
    return (
      <>
          <Layout style={{ marginLeft: 200 }}>
            <Header style={{ background: '#fff', padding: 0 }} >
            <h3>Tasks Page</h3>
            </Header>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Ol' Nelly</Breadcrumb.Item>
              </Breadcrumb>
              <h3> This Will Be The Tasks Form</h3>
              <AddToDo addToDo={this.addToDo} />
              <ToDo todo={this.state.todo} markComplete={this.markComplete} deleteTask={this.deleteTask}/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Footer heheheh</Footer>
          </Layout>
      </>
    );
  }
}

export default Tasks;

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

  fetchData = () => {
    axios
      .get("/api/tasks") // You can simply make your requests to "/api/whatever you want"
      .then(res => {
        // handle success
        console.log(res.data); // The entire response from the Rails API

        console.log(res.data.todo); // Just the message
        this.setState({
          todo: res.data
        });
      });
  };

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
  
  addToDo = title => {

    let data = {
      user_id: 1,
      title: title,
      completed: false
    }

    axios.post('http://localhost:8080/api/tasks', { data })
      .then(res => {
        console.log(res.data)
        this.setState({
        todo: [...this.state.todo, res.data]
        });
      })
  }

  deleteTask = id => {
    let data = {
      id: id
    }

    axios.delete(`http://localhost:8080/api/tasks`, {data})
      .then(res => {
        this.setState({
        todo: [...this.state.todo.filter(task => task.id !== id)]
        })
      });
  }


  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate() {
    this.fetchData();
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

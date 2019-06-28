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
  
  addToDo = title => {

    const data = {
      user_id: 1,
      title: title,
      completed: false
    }
    axios.post('http://localhost:8080/api/tasks', { data })
    .then((res) => {
      console.log("posting")        
        this.setState({
          todo: [...this.state.todo, data]
        })
        this.fetchData();
      })
      .catch((err) => {
        console.log(err)
      })
    }

  markComplete = id => {
    
    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    })    
    
    const data = this.state.todo  

    axios.put('http://localhost:8080/api/tasks', { data })
      .then ((res) => {
        this.fetchData();
      })

    // this.setState({
    //   todo: this.state.todo.map(task => {
    //     if (task.id === id) {
    //       task.completed = !task.completed;
    //     }
    //     return task;
    //   })
    // });
  }
    
  deleteTask = id => {
    const data = {
      id: id
    }

    axios.delete(`http://localhost:8080/api/tasks`, { data })
      .then((res) => {
        console.log("deleting")
        this.setState({
        todo: [...this.state.todo.filter(task => task.id !== id)]
        })
        this.fetchData();
      })
      .catch((err) => {
        console.log(err)
      })
  }


  componentDidMount() {
    this.fetchData();
  }

  // componentDidUpdate() {
  //   this.fetchData();
  // }

  render() {
    return (
      <>
        <AddToDo addToDo={this.addToDo} />
        <ToDo todo={this.state.todo} markComplete={this.markComplete} deleteTask={this.deleteTask}/>
      </>
    );
  }
}

export default Tasks;

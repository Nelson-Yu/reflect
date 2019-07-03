import React, { Component } from "react";
import axios from "axios";

import { Badge, Card } from 'antd';

import ToDo from "./tasks/ToDo"
import AddToDo from "./tasks/AddToDo"

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }

  fetchData = () => {
    axios
      .get("/api/tasks")
      .then(res => {
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
  }
    
  deleteTask = id => {
    const data = {
      id: id
    }

    axios.delete(`http://localhost:8080/api/tasks`, { data })
      .then((res) => {
        this.setState({
        todo: [...this.state.todo.filter(task => task.id !== id)]
        })
        this.fetchData();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  completedCounter = () => {
    const tasklist = this.state.todo;
    let counter = 0
    tasklist.forEach(task => {
      if (task.completed) {
        counter ++
      }
    })
    return counter;
  }

  incompletedCounter = () => {
    const tasklist = this.state.todo;
    let counter = 0
    tasklist.forEach(task => {
      if (!task.completed) {
        counter ++
      }
    })
    return counter;
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const completionBadges = (
      <div className="task-badges">
        <Badge count={this.completedCounter()} showZero style={{ backgroundColor: '#4EBA64', fontSize: "1em" }} /> <span>Complete &nbsp; &nbsp;</span>  
        <Badge count={this.incompletedCounter()} showZero style={{ backgroundColor: '#EF8157', fontSize: "1em" }}/> <span>Incomplete</span>
      </div>
    );

    return (
      <Card title="Tasks" extra={completionBadges} style={{ height: "21.5em", overflow: "auto" }}bordered={true}>
        {/* <div className="task-badges">
          <Badge count={this.completedCounter()} showZero style={{ backgroundColor: '#4EBA64', fontSize: "16px" }} /> <span>Complete &nbsp; &nbsp;</span>  
          <Badge count={this.incompletedCounter()} showZero style={{ backgroundColor: '#EF8157', fontSize: "16px" }}/> <span>Incomplete</span>
        </div> */}
        <AddToDo addToDo={this.addToDo} /> 
        <br/>
        <ToDo todo={this.state.todo} markComplete={this.markComplete} deleteTask={this.deleteTask}/>
      </Card>
    );
  }
}

export default Tasks;

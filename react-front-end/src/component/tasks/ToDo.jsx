import React, { Component } from "react";
import PropTypes from 'prop-types';

import Task from './Task';

class ToDo extends Component {
  render() {
    return this.props.todo.map((task) => (
        <Task key={task.id} task = {task} markComplete={this.props.markComplete} deleteTask={this.props.deleteTask}/>
    ));
  }
}

export default ToDo;
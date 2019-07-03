import React, { Component } from 'react';
import { Button, Checkbox, Icon } from 'antd';

class TodoItem extends Component {
  getStyle = () => {
    return {
      borderTop: '1px #ccc solid',
      textDecoration: this.props.task.completed ? 'line-through' : 'none',
      color: this.props.task.completed ? '#4EBA64' : '#EF8157',
      fontSize: '1.2em',
    }
  };

  render() {
    const { id, title, completed } = this.props.task;
    return (
      <div classname="each-task" style={ this.getStyle() }>
          <p>
            <Checkbox onChange={ this.props.markComplete.bind(this, id ) } checked={ completed ? 'checked': '' }></Checkbox>
            <span><strong>{title}</strong></span>
            <Button type="primary" onClick={this.props.deleteTask.bind(this, id)} style={{ float: 'right' }}><Icon type="delete" /></Button>
          </p>
      </div>
    )
  }
}

export default TodoItem;


import React, { Component } from 'react';
import { Button, Checkbox } from 'antd';

class TodoItem extends Component {
  getStyle = () => {
    return {
      padding: '5px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.task.completed ? 'line-through' : 'none',
    }
  };

  render() {
    const { id, title, completed } = this.props.task;
    return (
      <div style={ this.getStyle() }>
          <p>
            <Checkbox onChange={ this.props.markComplete.bind(this, id ) } checked={ completed ? 'checked': '' }></Checkbox>{' '}
            {title} 
            <Button type="primary" onClick={this.props.deleteTask.bind(this, id)} style={{ float: 'right' }}>Delete</Button>
          </p>
      </div>
    )
  }
}

export default TodoItem;


import React, { Component } from 'react';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#F4F4F4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.task.completed ? 'line-through' : 'none',
    }
  };

  render() {
    const { id, title, completed } = this.props.task;
    return (
      <div style={ this.getStyle() }>
          <p>
              <input type="checkbox" onChange={ this.props.markComplete.bind(this, id ) } checked={ completed ? 'checked': '' }/>{' '}
              {title}
              <button onClick={this.props.deleteTask.bind(this, id)} style={{ float: 'right' }}>Delete</button>
          </p>
      </div>
    )
  }
}

export default TodoItem;
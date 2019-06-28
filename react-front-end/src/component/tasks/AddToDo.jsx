import React, { Component } from 'react';
import { Button, Input } from 'antd'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: '' });
  }

  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
        <Input 
          type="text" 
          name="title"
          placeholder="Add Todo..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <Button type="primary" onClick={this.onSubmit}>Submit</Button>

      </form>
    )
  }
}

export default AddTodo;
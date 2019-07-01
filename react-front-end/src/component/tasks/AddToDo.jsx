import React, { Component } from 'react';
import { Button, Form, Input, Icon } from 'antd'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    const input = event.target.value;    
    this.props.addToDo(this.state.title);
    this.setState({ title: input });
  }

  onChange = (event) => {
    const input = event.target.value;
    input.trim();
    this.setState({ title: input });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex'}} noValidate>
          <Input 
            type="text" 
            name="title"
            placeholder="Add Todo..." 
            value={this.state.title}
            onChange={this.onChange}
            required
          />
          <Button type="primary" onClick={this.onSubmit}><Icon type="plus" /></Button>
      </form>
    )
  }
}

export default AddTodo;
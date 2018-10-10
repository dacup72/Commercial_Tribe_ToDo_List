import React, { Component, Fragment } from 'react';
//import FetchApi from '../fetch-api';
import API from '../../utils/API';
import { ButtonGroup, Button } from 'react-bootstrap';

import TodoItem from '../TodoItem';

const ENTER_KEY_CODE = 13;

export default class TodoMain extends Component {
  state = {
    todos: [],
    newText: ''
  };

  componentWillMount() {
    this.getTodos();
  }

  getTodos = () => {
    return API.getTodos()
      .then(todos => this.setState({ todos: todos.data, newText: '' }))
      .catch(() => alert('There was an error getting todos'));
  };

  createTodo = () => {
    API.createTodo({ text: this.state.newText })
      .then(() => this.getTodos())
      .catch(() => alert('There was an error creating todo'));
  };

  handleDeleteRequest = id => {
    API.deleteTodo(id)
      .then(() => this.getTodos())
      .catch(() => alert('There was an error deleting todo'));
  };

  handleUpdateRequest = id => {
    API.updateTodo(id)
      .then(() => this.getTodos())
      .catch(() => alert('There was an error updating todo'));
  }

  handleChange = e => {
    this.setState({ newText: e.target.value });
  };

  handleKeyDown = e => {
    if (e.keyCode !== ENTER_KEY_CODE) return;
    this.createTodo();
  };

  render() {
    return (
      <Fragment>
        <h1>todos</h1>
        <input
          autoFocus
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          placeholder="What needs to be done?"
          value={this.state.newText}
        />
        <ButtonGroup vertical block>
          <Button>Full width button</Button>
          <Button>Full width button</Button>
        </ButtonGroup>;
        <ul>
          {this.state.todos.length > 0 ? this.state.todos.map(todo => (
            <TodoItem
              data={todo}
              key={todo._id}
              handleDeleteRequest={this.handleDeleteRequest}
            />
          )) : null}
        </ul>
      </Fragment>
    );
  }
}

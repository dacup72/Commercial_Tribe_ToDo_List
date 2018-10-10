import React, { Component, Fragment } from 'react';
//import FetchApi from '../fetch-api';
import API from '../../utils/API';
import { ListGroup } from 'react-bootstrap';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';

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

  handleUpdateRequest = (id, checked) => {
    API.updateTodo(id, {checked: !checked})
      .then(() => this.getTodos())
      .catch(() => alert('There was an error updating todo'));
  }

  handleChange = e => {
    this.setState({ newText: e.target.value });
  };

  handleKeyDown = e => {
    if (e.keyCode !== ENTER_KEY_CODE) return;
    e.preventDefault();
    this.createTodo();
  };

  dynamicSort = property => {
    let sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Todos</h1>
        <TodoForm 
          value={this.state.newText}
          handleChange={this.handleChange}
          handleKeyDown={this.handleKeyDown}
        />
        <hr />
        <ListGroup>
          {this.state.todos.length > 0 ? this.state.todos.sort(this.dynamicSort("checked")).map(todo => {
            console.log(todo)
            return (
            <TodoItem
              data={todo}
              key={todo._id}
              handleDeleteRequest={this.handleDeleteRequest}
              handleUpdateRequest={this.handleUpdateRequest}
            />)
          }) : null}
        </ListGroup>
      </Fragment>
    );
  }
}

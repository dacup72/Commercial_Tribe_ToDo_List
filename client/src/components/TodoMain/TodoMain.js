import React, { Component } from 'react';
//import FetchApi from '../fetch-api';
import API from '../../utils/API';
import { ListGroup, Grid, Row, Col } from 'react-bootstrap';
import TodoItem from '../TodoItem';
import TodoForm from '../TodoForm';
import TodoStats from '../TodoStats';

const ENTER_KEY_CODE = 13;

export default class TodoMain extends Component {
  state = {
    todos: [],
    newText: '',
    completed: 0,
    pending: 0
  };

  componentWillMount() {
    this.getTodos();
  }

  getTodos = () => {
    return API.getTodos()
      .then(todos => {
        let completed = 0;
        let pending = 0;
        console.log(todos)
        todos.data.forEach(todo => {
          todo.checked ? completed++ : pending++;
        });

        this.setState({ 
          todos: todos.data, 
          newText: '',
          completed,
          pending 
        })
      })
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
    API.updateTodo(id, { checked: !checked })
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

      <Grid>
        <Row>
          <Col sm={10} smOffset={1}>
            <h1>Todos</h1>
            <Row>
              <TodoForm
                value={this.state.newText}
                handleChange={this.handleChange}
                handleKeyDown={this.handleKeyDown}
              />
              <TodoStats 
                pending={this.state.pending}
                completed={this.state.completed}
              />
            </Row>

            <hr />
            <Row>
              
              <ListGroup>
                {this.state.todos.length > 0 ? this.state.todos.sort(this.dynamicSort("checked")).map(todo => {
                  return (
                    <TodoItem
                      data={todo}
                      key={todo._id}
                      handleDeleteRequest={this.handleDeleteRequest}
                      handleUpdateRequest={this.handleUpdateRequest}
                    />)
                }) : null}
              </ListGroup>

            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

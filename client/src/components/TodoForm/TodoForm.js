import React, { Fragment } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const TodoForm = ({ value, handleChange, handleKeyDown }) => (
  <Fragment>
    <form>
      <FormGroup controlId="todoForm">
        <ControlLabel>What needs to be done?</ControlLabel>
        <FormControl
          type="text"
          value={value}
          placeholder="Enter text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <FormControl.Feedback />
      </FormGroup>
    </form>


    {/* <input
      autoFocus
      onChange={this.handleChange}
      onKeyDown={this.handleKeyDown}
      placeholder="What needs to be done?"
      value={this.state.newText}
    /> */}
  </Fragment>
);

export default TodoForm;
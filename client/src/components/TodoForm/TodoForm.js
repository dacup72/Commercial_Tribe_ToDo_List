import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const TodoForm = ({ value, handleChange, handleKeyDown }) => (
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
    </FormGroup>
  </form>
);

export default TodoForm;
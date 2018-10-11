import React from 'react';
import { FormGroup, ControlLabel, FormControl, Col } from 'react-bootstrap';

const TodoForm = ({ value, handleChange, handleKeyDown }) => (

  <Col sm={6}>
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
  </Col>

);

export default TodoForm;
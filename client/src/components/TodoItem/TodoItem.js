import React from 'react';
import { Button, ListGroupItem } from 'react-bootstrap';



const TodoItem = ({ handleDeleteRequest, handleUpdateRequest, data: { text, _id, checked } }) => (
  <ListGroupItem className={checked ? "disabled" : null}>
    {text}
    <Button bsStyle="success" className="pull-right" onClick={() => handleUpdateRequest(_id, checked)}>
      Check
    </Button>
    <Button bsStyle="danger" className="pull-right" onClick={() => handleDeleteRequest(_id)}>
      Delete
    </Button>
  </ListGroupItem>
);


export default TodoItem;
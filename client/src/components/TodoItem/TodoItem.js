import React from 'react';
import { Button, ListGroupItem, ButtonGroup, Glyphicon } from 'react-bootstrap';



const TodoItem = ({ handleDeleteRequest, handleUpdateRequest, data: { text, _id, checked } }) => (
  <ListGroupItem className={checked ? "disabled" : null} style={{ "overflow": "auto" }}>
    {text}
    <ButtonGroup className="pull-right">
      <Button bsStyle="success" onClick={() => handleUpdateRequest(_id, checked)}>
        <Glyphicon glyph="ok" />
      </Button>
      <Button bsStyle="danger" onClick={() => handleDeleteRequest(_id)}>
        Delete
      </Button>
    </ButtonGroup>
  </ListGroupItem>
);


export default TodoItem;
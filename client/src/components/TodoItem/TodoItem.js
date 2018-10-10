import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const TodoItem = ({ handleDeleteRequest, data: { text, _id, checked } }) => (
  <Fragment>
    <Button>{text}</Button>
  </Fragment>
);

export default TodoItem;
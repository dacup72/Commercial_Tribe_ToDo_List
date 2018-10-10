import React, { Fragment } from 'react';

const TodoItem = ({ handleDeleteRequest, data: { text, _id, checked } }) => (
  <Fragment>
    <li>
      <div className="view">
        <label>{text}</label>
        <button onClick={() => handleDeleteRequest(_id)}>Remove Todo</button>
      </div>
    </li>
  </Fragment>
);

export default TodoItem;
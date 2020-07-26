import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ done,
      label, onToggleDone, onDelete }) => {

  let classNames = 'todo-list-item';
  let classNameDelete = '.todo-list-item button';

  if (done) {
    classNames += ' done';
    classNameDelete += ' done';
  }

  return (
          <span className={classNames}>
          <span
            className="todo-list-item-label"
            onClick={onToggleDone}>{label}</span>

          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={onDelete}>Delete
          </button>
          </span>
  );
};

export default TodoListItem;


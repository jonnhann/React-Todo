// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';
import PendingTask from './PendingTask'

const TodoList = props => (
  <ul>
    <PendingTask name={props.pendingTask} />
    
    {props.tasks
    .filter(task => !props.isFiltered || !task.isCompleted)
    .map((task, index) => (
      <Todo
        key={index}
        name={task.name}
        isCompleted={task.isCompleted}
        isEditing={task.isEditing}
        handleCompleted={() => props.toggleCompletedAt(index)}
        handleToggleEditing={()=> props.toggleEditingAt(index)}
        setName={text => props.setNameAt(text, index)}
        handleRemove={()=> props.removeTaskAt(index)}

      />

    ))}
  </ul>
);

TodoList.propTypes = {
  tasks: PropTypes.array.isRequired,
  toggleCompletedAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeTaskAt: PropTypes.func.isRequired,
  pendingTask: PropTypes.string.isRequired,
  
};

export default TodoList;

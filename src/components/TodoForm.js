import React from 'react';
import PropTypes from 'prop-types';

const TodoForm = (props) => {

    
  return (
    <form onSubmit={props.newTaskAddHandler}>
    <input
      type='text'
      onChange={props.handleNameInput}
      value={props.pendingTask}
      placeholder='Add Task'
    />
    <button type='submit' name='submit' value='submit'>
      Add
    </button>
  </form>
  )

  
}


export default TodoForm;
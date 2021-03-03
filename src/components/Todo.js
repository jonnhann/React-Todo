import React from 'react';
import './Todo.css'

 const Todo = (props) => {
	return (
		<div
			className={props.task.completed ? 'completed' : ''}
			onClick={() => props.toggleCompleted(props.task.id)}>
                <p>{props.task.name}</p>
            </div>
	);
};

export default Todo;


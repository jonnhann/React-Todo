import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super()
    this.state={
      tasks: [
        {
          name: '',
          id: '',
          completed: false
        }

      ]
    }
  }

  toggleCompleted = (taskId) => {
    const newTasks = this.state.tasks.map(task => {
      if(taskId === task.id) {
        return {
          ...task,
          completed: !task.completed
        }
      } else {
        return task
      }
    })

    this.setState({
      ...this.state,
      tasks: newTasks
    })
  }

  addTask = (taskName, e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    }

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }

  clearCompleted = () => {
    //if the task.completed is true, then filter it out of this.state.tasks array
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} /> 
        <TodoList 
        clearCompleted={this.clearCompleted}
        toggleCompleted={this.toggleCompleted}
        tasks={this.state.tasks}
        /> 
      </div>
    );
  }
}

export default App;

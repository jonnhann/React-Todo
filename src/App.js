import React from 'react';
import TodoList from './components/TodoList';
import Counter from './Counter';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  state = {
    isFiltered: false,
    pendingTask: '',
    tasks: [
      {
        name: 'Grocery',
        isCompleted: false,
        isEditing: false
      },
      {
        name: 'Study',
        isCompleted: true,
        isEditing: false
      },
      {
        name: 'Sleep',
        isCompleted: true,
        isEditing: false
      }
    ]
  };

  //Toggle
  toggleTaskPropertyAt = (property, indexToChange) =>
    this.setState({
      tasks: this.state.tasks.map((task, index) => {
        if (index === indexToChange) {
          return {
            ...task,
            [property]: !task[property]
          };
        }
        return task;
      })
    });

  //completed
  toggleCompletedAt = index => {
    this.toggleTaskPropertyAt('isCompleted', index);
  };

  //remove task
  removeTaskAt = index =>
    this.setState({
      tasks: [
        ...this.state.tasks.slice(0, index),
        ...this.state.tasks.slice(index + 1)
      ]
    });

  toggleEditingAt = index => {
    this.toggleTaskPropertyAt('isEditing', index);
  };
  //Name
  setNameAt = (name, indexToChange) =>
    this.setState({
      tasks: this.state.tasks.map((task, index) => {
        if (index === indexToChange) {
          return {
            ...task,
            name
          };
        }
        return task;
      })
    });

  //handle name change
  handleNameInput = e => {
    this.setState({ pendingTask: e.target.value });
  };

  //Add task handler
  newTaskAddHandler = e => {
    e.preventDefault();
    this.setState({
      tasks: [
        {
          name: this.state.pendingTask,
          isCompleted: false,
          isEditing: false
        },
        ...this.state.tasks
      ],
      pendingTask: ''
    });
  };

  //Filter
  toggleFilter = () => {
    this.setState({ isFiltered: !this.state.isFiltered });
  };

  getTotalTasks = () => this.state.tasks.length;

  getCompletedTasks = () =>
    this.state.tasks.reduce(
      (total, task) => (task.isCompleted ? total + 1 : total),
      0
    );

  // getUnfinishedTasks = () =>

  render() {
    const totalTasks = this.getTotalTasks();
    const number = this.getCompletedTasks();

    return (
      <div className='App'>
        <header>
          <h1>Todo</h1>
          <TodoForm
            newTaskAddHandler={this.newTaskAddHandler}
            tasks={this.state.tasks}
            pendingTask={this.state.pendingTask}
            handleNameInput={this.handleNameInput}
          />
        </header>
        <div className='main'>
          <div>
            <h2>Tasks</h2>
            <label>
              <input
                type='checkbox'
                checked={this.state.isFiltered}
                onChange={this.toggleFilter}
              />{' '}
              Hide Completed Tasks
            </label>
          </div>

          <Counter
            totalTasks={totalTasks}
            numberCompleted={number}
            numberIncompleted={totalTasks - number}
          />

          <TodoList
            tasks={this.state.tasks}
            toggleCompletedAt={this.toggleCompletedAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeTaskAt={this.removeTaskAt}
            pendingTask={this.state.pendingTask}
          />
        </div>
      </div>
    );
  }
}

export default App;

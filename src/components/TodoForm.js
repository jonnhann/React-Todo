import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            task: ''
        }
    }

    handleChanges = (e) => {
       this.setState({
           task: e.target.value
       })
    }

    submitTask = e => {
        e.preventDefault();
        this.setState({
            task:''
        })
        this.props.addTask(this.state.task, e)
    }

    render(){
        return(
            <form onSubmit={this.submitTask}>
                <input type="text" name='task' value={this.state.task} onChange={this.handleChanges} />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;
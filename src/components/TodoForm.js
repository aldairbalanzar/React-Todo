import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        };
    }

    //assigns target value to todo key from input
    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            todo: e.target.value
        });
    };
    
    //submit function that will call function to add todo to todoList when submitted
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({
        todo: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="text"
                    name='todo'
                    value={this.state.todo}
                    onChange={this.handleChange}
                    />
                </form>
                <button type='button' onClick={this.props.clearFinished}>Clear</button>
            </div>
        );
    }
}

export default TodoForm;
import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

const todoList = [];

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
constructor(){
  super();
  this.state = {
      todoList: todoList,
      name: ''
  };
}

addTodo = todoName => {
  const newTodo = {
    name: todoName,
    id: new Date(),
    isFinished: false
  };
  this.setState({
    todoList: [...this.state.todoList, newTodo]
  });
};

toggleTodo = (clickedTodoId) => {
  console.log(`clicked ${clickedTodoId}'s toggle`)
  this.setState({
    todoList: this.state.todoList.map(todo => {
      if(todo.id === clickedTodoId) {
        return {
          ...todo,
          isFinished: !todo.isFinished
        };
      } else {
        return todo;
      }
    })
  });
};

clearFinished = () => {
  console.log('clear');
  this.setState({
    todoList: this.state.todoList.filter(todo => {
      if(todo.isFinished === false) {
        return {
          ...todo
        }
      }
    })
  })
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
         addTodo={this.addTodo}
         clearFinished={this.clearFinished}
         />
        <TodoList 
         todoList={this.state.todoList}
         toggleTodo={this.toggleTodo}
         />
      </div>
    );
  }
}

export default App;

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div>
            {props.todoList.map(todo => (
                <Todo
                 key={todo.id}
                 todo={todo}
                 toggleTodo={props.toggleTodo}
                 />
            ))}
        </div>
    )
}

export default TodoList;
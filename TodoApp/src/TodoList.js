import React, { useState } from "react";
import { v4 as uuid } from "uuid"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"
import "./TodoList.css"

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const addTodo = ( todo ) => {
        setTodos(todos =>
            [...todos, todo]
        )
    }

    const deleteTodo = (todoToDelete) => {
        setTodos(todos => 
            todos.filter(todos => todoToDelete !== todos)
            )
    }

    return (
        <div className="TodoList">
            <h1 className="TodoList-h1">To Do List</h1>
            <NewTodoForm addTodo={addTodo} />
            <div className="TodoList-todos">
            {todos.map(todo => <Todo text={todo} key={uuid()} deleteTodo={deleteTodo}/>)}
            </div>
        </div>
    )
}

export default TodoList;
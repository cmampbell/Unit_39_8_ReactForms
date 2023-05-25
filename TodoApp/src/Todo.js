import React from "react";
import "./Todo.css"

const Todo = ({text, deleteTodo}) => (
    <div className="Todo">
        <p className="Todo-text">{text}</p>
        <button className="Todo-delete"onClick={() => deleteTodo(text)}>X</button>
    </div>
)

export default Todo;
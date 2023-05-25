import React, { useState } from "react";
import "./NewTodoForm.css"

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = '';
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        setFormData(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit} className="NewTodoForm">
            <label htmlFor="todo" className="NewTodoForm-label">Task:</label>
            <input
                type="text"
                name="todo"
                id="todo"
                placeholder="Type todo here"
                onChange={handleChange}
                value={formData}
                className="NewTodoForm-input"
            />
            <button className="NewTodoForm-btn">Add Todo</button>
        </form>
    )
}

export default NewTodoForm;
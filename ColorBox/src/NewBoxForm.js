import React, { useState } from "react";
import "./NewBoxForm.css"

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        width: 1,
        height: 1,
        backgroundColor: '#000000'
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(() => ({
            ...formData, [name]: value
        }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input
                type="number"
                min="1"
                max="500"
                name="width"
                id="width"
                placeholder="1"
                onChange={handleChange}
                value={formData.width}
            />
            <label htmlFor="height">Height:</label>
            <input
                type="number"
                min="1"
                max="500"
                name="height"
                id="height"
                placeholder="1"
                onChange={handleChange}
                value={formData.height}
            />
            <label htmlFor="backgroundColor">Color:</label>
            <input
                type="color"
                name="backgroundColor"
                id="backgroundColor"
                onChange={handleChange}
                value={formData.backgroundColor}
            />
            <button>Create Box</button>
        </form>
    )
}

export default NewBoxForm;
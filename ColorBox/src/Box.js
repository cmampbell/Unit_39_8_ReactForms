import React from "react";
import "./Box.css"

const Box = ({boxStyle, deleteBox}) => (
    <div style={boxStyle}>
        <button onClick={() => deleteBox(boxStyle)}>X</button>
    </div>
)

export default Box;
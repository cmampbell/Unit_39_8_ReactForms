import React, { useState } from "react";
import { v4 as uuid } from "uuid"
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"
import "./BoxList.css"

const BoxList = () => {
    const [boxes, setBoxes] = useState([])

    const addBox = ({ height, width, backgroundColor }) => {
        setBoxes(boxes =>
            [...boxes, { height: +height, width: +width, backgroundColor }]
        )
    }

    const deleteBox = (boxToDelete) => {
        setBoxes(boxes => 
            boxes.filter(box => boxToDelete !== box)
            )
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => <Box boxStyle={box} key={uuid()} deleteBox={deleteBox}/>)}
        </div>
    )
}

export default BoxList;
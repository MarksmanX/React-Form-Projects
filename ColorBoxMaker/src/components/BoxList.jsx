import { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuid() }])
    }
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }
    return (
        <div>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({id, color, height, width}) => <Box key={id} id={id} color={color} height={height} width={width} removeBox={() => removeBox(id)} />)}
            </div>
        </div>
    )
}

export default BoxList;
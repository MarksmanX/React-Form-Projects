import { useState } from "react";

const NewBoxForm = ({addBox}) => {
    const initial_state = {
        color: '#000000',
        height: '',
        width: ''
    }
    const [formData, setFormData] = useState(initial_state);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({...formData});
        setFormData(initial_state)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="color">Color: </label>
            <input 
                type="color"
                id="color"
                name="color"
                placeholder="background color"
                value={formData.color}
                onChange={handleChange}
            />
            <label htmlFor="width">Width: </label>
            <input 
                type="number"
                id="width"
                name="width"
                min={1}
                max={400}
                placeholder="width"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="height">Height: </label>
            <input 
                type="number"
                id="height"
                name="height"
                min={1}
                max={400}
                placeholder="height"
                value={formData.height}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm;
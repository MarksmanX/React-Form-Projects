import { useState } from "react";

const NewTodoForm = ({addTodo}) => {
    const initial_state = {
        name: ''
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
        addTodo({...formData});
        setFormData(initial_state)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Todo Name: </label>
            <input 
                type="text"
                name="name"
                placeholder="Todo Name"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    )  
}

export default NewTodoForm;
const Todo = ({id, name, removeTodo}) => {
    return (
        <li id={id}>
            {name}
            <button onClick={() => removeTodo(id)}>X</button> 
        </li>
    )
}

export default Todo;
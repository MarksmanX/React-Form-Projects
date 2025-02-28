import { useState } from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id: uuid() }])
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id ))
    }
    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <h3>Todo List</h3>
            <ul>
                {todos.map(({id, name}) => <Todo id={id} name={name} key={id} removeTodo={removeTodo} />)}
            </ul>
        </div>
    )
} 

export default TodoList;
import React, { useState } from 'react'
import '../Components/style.css';

import Form from './Form'
import List from './List'


function Todos() {

    const [todos, setTodos] = useState([
        {
            duty: "Write a blog post"
        },
        {
            duty: "Practice chess"
        },
        {
            duty: "Go massage"
        },
        {
            duty: "Love yourself"
        },
    ]);

    const [activeTodos, setActiveTodos] = useState("All");

    const removeTodos = (duty) => {
        const filtered = todos.filter(item => item.duty !== duty)
        setTodos(filtered);
    }

    let filteredTodos =
        activeTodos === "All" ? todos
            : activeTodos === "Active" ? todos.filter(item => item.complete === false)
                : todos.filter(item => item.complete === true)

    const updateCompleteTodos = (duty) => {
        const index = todos.findIndex(item => item.duty === duty)
        const todo = todos.find(item => item.duty === duty);
        todo.complete = !todo.complete
        const newTodos = [...todos];
        newTodos[index] = todo;
        setTodos(newTodos);
    }

    return (
        <div id='container'>
            <h1>to do's</h1>
            <Form
                addTodos={setTodos}
                todos={todos}

            />
            <List
                updateCompleteTodos={updateCompleteTodos}
                activeTodos={activeTodos}
                setActiveTodos={setActiveTodos}
                removeTodos={removeTodos}
                filteredTodos={filteredTodos}
                todos={todos}
                addTodos={setTodos}

            />
        </div>
    )
}

export default Todos;
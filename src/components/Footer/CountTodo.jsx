import React from 'react'
import { useSelector } from 'react-redux'

function CountTodo() {
    const todos=useSelector((state)=>state.todos.todos.filter((todo)=>{
        return !todo.status;
    }))

    console.log(todos);
    return (
        <div>
             <h5>Count UnCompleted Todos </h5>
             <span>{todos ? todos.length : '0'}</span>

        </div>
    )
}

export default CountTodo

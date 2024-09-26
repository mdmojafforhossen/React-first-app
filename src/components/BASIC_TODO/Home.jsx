import React, { useState } from 'react'
import Todos from './Todos'
import NewTodo from './NewTodo'

const damyTodo =[];

export default function Home() {
    const [todos,setTodo]=useState(damyTodo)

    const newTodoAdd = (newTodo) =>{
        setTodo([...todos, newTodo])
    }
  return (
    <div>
        < NewTodo todosAdd={newTodoAdd}/>
        <h1>New Todo</h1>
        < Todos todos={todos}/>
    </div>
  )
}


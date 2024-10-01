import React, { useState } from 'react'

const NewTodo = (props) => {

    const [todo, setTodo] = useState("");

    const handleTodo = (e) =>{
        setTodo(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        props.todosAdd(todo);
        setTodo('');
    }


  return (
    <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Todo Name :</label>
        <input type="text" name='todo' onChange={handleTodo} value={todo} placeholder='Enter todo Name' />
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo

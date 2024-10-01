import React, { useEffect, useState } from 'react'

const LoadingMessege = <p>tod is Loading...</p>

export default function UseEffect() {

    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then((res)=>{
            if(!res.ok){
                throw Error("Fatching is not successfull")
            }else{
                return res.json();
            }
          
        })
        .then((data)=>{
            setTodos(data);
            setIsLoading(false);
            setError(null);
        }).catch((error)=>{
            setError(error.message);
            setIsLoading(false);
        })
    },[]);

const todoElements = todos && todos.map((todo)=>{
    return <p key={todo.id}>{todo.title}</p>
  })

  return (
    <div>
      <h1>TODOS</h1>
      {error && <p style={{color:'red'}}>{error}</p>}
      {isLoading && LoadingMessege}
      {todoElements}
    </div>
  )
}

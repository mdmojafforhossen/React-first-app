import React, { useState } from 'react'

export default function UPDATE_STATE() {
    const [count, setCount] = useState(0);
    const updateIncreament = () =>{
        setCount((count)=>count+1)
        setCount((count)=>count+1)
        setCount((count)=>count+1)
    }
  return (
    <div>
      <h1>HELLO UPDATE_STATE</h1>
      <h1>Count : {count}</h1>
      <button onClick={updateIncreament}>Increament</button>
    </div>
  )
}

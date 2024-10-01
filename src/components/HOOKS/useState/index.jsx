import React, { useState } from 'react'

export default function HOOK_USESTATE() {

    const [count, setCount] = useState(0)

   const handleIncreament =() =>{
        setCount(count+1)
    }
    
  return (
    <div>
      <h1>Hello useState</h1>
      <h1>Count : {count}</h1>
      <button onClick={handleIncreament}>increament</button>
    </div>
  )
}

import React from 'react'

export default function STOP_PROPAGATION() {

    const handleParentClick = (e) =>{
        console.log("Parent Clicked",e)
    }
    const handleChildClick = (e) =>{
        e.stopPropagation();
        console.log("Child Clicked",e)
    }
  return (
    <div onClick={handleParentClick }>
      <h1>HELLO STOP_PROPAGATION</h1>
      <button onClick={handleChildClick }>STOP_PROPAGATION</button>
    </div>
  )
}

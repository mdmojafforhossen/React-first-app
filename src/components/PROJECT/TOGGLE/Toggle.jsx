import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle]=useState(true);
  return (
    <div className='toggle'>
      <h1>Hello</h1>

     
        {toggle && (
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, cupiditate ratione. Provident amet vel, id odio labore explicabo doloribus error.</p>
        )}
     

      <button onClick={()=>{setToggle(!toggle)}}>
        {toggle ? "Hide":"Show"}
      </button>
      
    </div>
  )
}

export default Toggle

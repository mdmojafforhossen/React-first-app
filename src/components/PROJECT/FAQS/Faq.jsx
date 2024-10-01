import React, { useState } from 'react'

export default function Faq({id,title,Desc}) {
    const [toggle, setToggle] = useState(false)
  return (
    <div style={{marginTop:"10px"}}>
        <div className='faqs'>
      <div className='faqsTitle'>
      <h3>{title}</h3>
      <button onClick={()=>{setToggle(!toggle)}}>{toggle ? "-":"+"}</button>
      </div>
      {toggle && <p style={{color:'white'}}>{Desc}</p>}
    </div>
    </div>
  )
}

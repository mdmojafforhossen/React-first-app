import React from 'react'

const items =[
  {
  name:"mojaffor",
  age:29
},
  {
  name:"Ripa",
  age:19
},
  {
  name:"Muaz",
  age:1.6
}
]
export default function Child(props) {
props.onChild(items);
  
  return (
    <div>
      {items.map((item,index)=>{
        return <h1 key={index}>Name : {item.name} Age : {item.age}</h1>
      })}
      <h1>I'm Child Component</h1>
    </div>
  )
}

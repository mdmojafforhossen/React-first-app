import React, { useState } from 'react'
import style from './form.module.css'

export default function FORM() {

  const [user, setUser] = useState({name:"", email:"", password:""})
  const {name, email, password}=user;

  const handleChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(user);
  setUser({ name: '', email: '',password:'' });
}

  return (
    <div className={style.container}>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>

        <div className={style.formGroup}>
        <label name="Name">Full Name :</label><br/>
        <input type="text" onChange={handleChange} value={name} name="name" placeholder='Enter your name' required />
        </div>
        <div className={style.formGroup}>
        <label name="Email">Email :</label><br/>
        <input type="email" onChange={handleChange} value={email} name="email" placeholder='Enter your email' required />
        </div>
        <div className={style.formGroup}>
        <label name="Password">Password :</label><br/>
        <input type="password" onChange={handleChange} name="password" value={password} placeholder='Enter your password' required />
        </div>
        <div className={style.formGroup}>
        <button type='submit'>Submit</button>
        </div>
       
      </form>
    </div>
  )
}

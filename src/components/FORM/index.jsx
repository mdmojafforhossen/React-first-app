import React, { useState } from 'react'
import style from './form.module.css'

export default function FORM() {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleNameChange =(e)=>{
    setName(e.target.value);
  }
  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }
  const handlePasswordChange =(e)=>{
    setPassword(e.target.value);
  }
  const handleSubmit =(e)=>{
    const userInfo ={
      name,
      email,
      password
    }
    console.log(userInfo);
    e.preventDefault();
  }
  return (
    <div className={style.container}>
      <h1>Registration</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className={style.formGroup}>
        <label name="Name">Full Name :</label><br/>
        <input type="text" onChange={handleNameChange} value={name} name="name" placeholder='Enter your name' required />
        </div>
        <div className={style.formGroup}>
        <label name="Email">Email :</label><br/>
        <input type="email" onChange={handleEmailChange} value={email} name="email" placeholder='Enter your email' required />
        </div>
        <div className={style.formGroup}>
        <label name="Password">Password :</label><br/>
        <input type="password" onChange={handlePasswordChange} name="password" value={password} placeholder='Enter your password' required />
        </div>
        <div className={style.formGroup}>
        <button type='submit'>Submit</button>
        </div>
       
      </form>
    </div>
  )
}

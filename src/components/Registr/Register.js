import React from 'react';
import {useState} from 'react';
import './Register.css';
import Main from '../Main';
import { Link } from 'react-router-dom';

const Register =()=>{
    
    const [data, setData] = useState({})

    const Registration= async(e)=>{
      e.preventDefault()
      try{
        let response= await fetch('https://first-node-js-app-r.herokuapp.com/api/auth/login',{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              email: "vlad8@mail.ru",
              password: "Hello_34"
            })  
          })
          let result= await response.json();
          console.log(result)
      }
      catch(err){
        console.log(err)
      }  
        }
        
    return (
        <div className='register'>
          <Main/>
            <h1 className='register_title'>Registration</h1>

            <form class='form' onSubmit={e=>Registration(e)}>
                <input
                type='text'
                placeholder='Email'
                className='email'
                value={data.email}
                onChange={e=>setData({...data, email:e.target.value})}
                />
                <input
                type='text'
                placeholder='Password'
                className='password'
                value={data.password}
                onChange={e=>setData({...data, password:e.target.value})}
                />
                <input
                type='text'
                placeholder='Repeat password'
                className='copypassword'
                value={data.password2}
                onChange={e=>setData({...data, password2:e.target.value})}
                />
                <button
                type='submit'
                className='btn'>
                Registration
                </button>
                <div className='link-login'> 
                    <Link className='link-log' to='/todo-list'>Login</Link> 
                </div> 
            </form>
        </div>
    )

}
export default Register

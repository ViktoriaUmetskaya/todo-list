import './todo.css';
import {useEffect, useState} from 'react';
import Form from '../Form/Form.js';
import Delete from '../../images/delete.png'
import { Link } from 'react-router-dom'; 

function TODO(){
    const [todos,setTodos] =useState([]);
    const [allTodos, setallTodos]= useState(0);
    const [allComplete, setAllComplete]= useState(0);
  
    useEffect(()=>{
      setAllComplete(todos.filter(todo=>todo.done === true).length)
    },[todos])
  
    const putTodo=(value)=>{
      if(value){
        setTodos([...todos,{id: Date.now(), text: value, done:false}])
        setallTodos(allTodos+1)
      } else {
        console.log('Введите текст')
      }
    }
      const toggleTodo=(id)=>{
        setTodos(todos.map(todo=>{
          if(todo.id!==id) return todo;
          return {
            ...todo,
            done:!todo.done
          }
        }))
      }
      const removeTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
        setallTodos(allTodos-1)
      }
      const clearTodos=()=>{
        setTodos([]);
        setallTodos(0);
      }
  
    return (
      <div className="wrapper">
        <div className='container'>
          
          <h1 className='title'>What's the plan for Today?</h1>
          <Form 
            putTodo={putTodo}
          />
          <ul className='todos'>
            {
              todos.map(todo=>{
                return (
                  <li className={todo.done ? 'todo done' : 'todo'} key={todo.id} onClick={()=>toggleTodo(todo.id)}>
                    {todo.text}
                    <img src={Delete}  alt='delete' className='delete' onClick={(e)=>{
                      e.stopPropagation();
                      removeTodo(todo.id);
                    }}/>
                  </li>
                )
              })
            }
            <div className='info'>
              <span>All todos: {allTodos}</span>
              <span>Complete: {allComplete}</span>
            </div>
            <button className='btnn' onClick={clearTodos}>Clear All</button>
            <div className='home'>
              <Link className='gohome' to='/'>Main</Link>
            </div>
            </ul>
        </div>
      </div>
    );
  }
  export default TODO;

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Form/Login/Login.js';
import Register from './Registr/Register';
import TODO from './todo/todo';

const Content=()=>{
    return(
        <div className='content'>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Login/>}/>
                    <Route exact path='/register' element={<Register/>}/>
                    <Route exact path='/todo' element={<TODO/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Content

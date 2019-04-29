import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import QuestionList from './QuestionList'
import QuestionForm from './QuestionForm'
import SignupForm from '../Users/SignupForm';
import LoginForm from '../Users/LoginForm';
import './style.css'

const Questions = () => (
  <div className='questions'>
    <div className='questions__sticky'>
      <h1 className='text-center'>Questions</h1>
      <ul className='nav nav-pills questions__nav'>
        <li className='nav-item'><NavLink to='/' className='nav-link' exact>Home</NavLink></li>
        <li className='nav-item'><NavLink to='/create' className='nav-link'>Create</NavLink></li>
        <li className="nav-item"><NavLink to='/signup' className='nav-link'>Sign Up</NavLink></li>
        <li className="nav-item"><NavLink to='/login' className='nav-link'>Login</NavLink></li>
      </ul>
    </div>
    <Switch>
      <Route path='/' component={QuestionList} exact />
      <Route path='/create' component={QuestionForm} />
      <Route path='/signup' component={SignupForm} />
      <Route path='/login' component={LoginForm} />
    </Switch>
  </div>
)

export default Questions

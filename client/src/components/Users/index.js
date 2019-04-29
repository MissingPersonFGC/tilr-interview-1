import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import SignupForm from './SignupForm'
import './style.css'

const Users = () => (
  <div className='questions'>
    <div className='questions__sticky'>
      <h1 className='text-center'>Login/Signup</h1>
      <ul className='nav nav-pills questions__nav'>
        <li className='nav-item'><NavLink to='/' className='nav-link' exact>Home</NavLink></li>
        <li className='nav-item'><NavLink to='/create' className='nav-link'>Create</NavLink></li>
        <li className="nav-item"><NavLink to='/users' className='nav-link'>Login / Sign Up</NavLink></li>
      </ul>
    </div>
    <div>
      <h3>Signup</h3>
    </div>
    <Switch>       
        <Route path='/users' component={SignupForm} exact />
    </Switch>
  </div>
)

export default Users

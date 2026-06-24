import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className='menu'>
      <div className='menu1'>
      <Link to='home'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='students'>Students</Link>
      <Link to='courses'>Courses</Link>
      <Link to='instructors'>Instructors</Link>
      <Link to='departments'>Departments</Link>
      </div>
      <div className='connexion'>
        <Link to='connexion'>Connexion</Link>
      </div>

    </div>
  )
}

export default Menu

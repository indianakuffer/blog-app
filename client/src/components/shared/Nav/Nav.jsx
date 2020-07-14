import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">Blog App</NavLink>
        <div className="links">
          <NavLink className="link" to="/create-post">Create a post</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav 
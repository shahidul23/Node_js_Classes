import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link> &nbsp;
        <Link to={"/register"}>Register</Link>&nbsp;
        <Link to={"login"}>Login</Link>&nbsp;
      </nav>
    </div>
  )
}

export default Header
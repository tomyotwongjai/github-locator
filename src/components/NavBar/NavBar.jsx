import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import './NavBar.css'

function NavBar() {
  return (
    <div className="header">
        <AiFillGithub className="header-icon" />
        <h1>Github Locator</h1>
    </div>
  )
}

export default NavBar
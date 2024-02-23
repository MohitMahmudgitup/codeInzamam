import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <div className='display_Nav'>
        <div className="logoName">
            <h3 className='logoName'>The Commercian Classroom </h3>
        </div>
        <div className="navItems">
           <NavLink className = {` navName ${props.navItem}`} onClick={props.displayNone} to="/">HOME</NavLink>
           <NavLink className = {` navName ${props.navItem}`} onClick={props.displayNone} to="/About">ABOUT US</NavLink>
           <NavLink className = {` navName ${props.navItem}`} onClick={props.displayNone} to="/Contact">CONTACT</NavLink>
        </div>
        <div className='mblNav'>
            <img className="NavIcon" onClick={props.clickNavIcon} src={props.navIcon} onalt="" />
        </div>
    </div>
    </>
  )
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className="display_Nav">
        <div className="logoName">
          <h3 className="logoName">CodeWithInz@</h3>
        </div>
        <div className="navItems">
          <NavLink className={` navName ${props.navItem}`} onClick={props.displayNone} to="/">HOME</NavLink>
          <NavLink className={` navName ${props.navItem}`}onClick={props.displayNone}to="/About">ABOUT US</NavLink>
          <NavLink className={` navName ${props.navItem}`} onClick={props.displayNone} to="/contact">CONTACT</NavLink>
          <button className="btn">Log in</button>
        </div>
        <div className="mblNav">
          <img className="NavIcon" onClick={props.clickNavIcon} src={props.navIcon} onalt="" />
        </div>
      </nav>
    </>
  );
}

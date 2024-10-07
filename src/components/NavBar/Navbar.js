import React from 'react'
import { NavLink } from 'react-router-dom'
import "../NavBar/NavbarStyle.css"
import { Link } from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import { personalData } from '../../portfolio'
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
  <div className='navbar-header'>
    <h1>{personalData.name}</h1>
    <p>{personalData.role}</p>
    </div>
    <nav className='navMenu'>
      <NavLink exact to ='/' className={({isActive})=>(isActive ? 'active-link':'nav-item')}>Home</NavLink>
      <NavLink to ='/education' className={({isActive})=>(isActive ? 'active-link':'nav-item')}>Education</NavLink>
      <NavLink to ='/experience' className={({isActive})=>(isActive ? 'active-link':'nav-item')}>Experience</NavLink>
      <NavLink to ='/projects'  className={({isActive})=>(isActive ? 'active-link':'nav-item')}>Projects</NavLink>
      <NavLink to ='/contact'  className={({isActive})=>(isActive ? 'active-link':'nav-item')}>Contact</NavLink>
    </nav>
{/* <ul className='navMenu'>
    <li> <Link to="/" className='home'> Home </Link> </li>
    <li> <Link to="/education" className='education'> Education </Link> </li>
    <li> <Link to="/experience" className='experience'> Experience </Link> </li>
    <li> <Link to="/projects" className='projects'> Projects </Link> </li>
    <li> <Link to="/contact" className='contact'> Contact </Link> </li>
</ul> */}
<div className='menuIcon'>
        <FaBars  size={20} style={{color:"#fff"}}></FaBars>
    </div>
    </div>
    
    </>

  )
}

export default Navbar
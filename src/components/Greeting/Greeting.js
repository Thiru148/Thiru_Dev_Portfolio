import React from 'react'
import {Link} from 'react-router-dom'
import { personalData } from '../../portfolio'
import employee from "../../assets/svgs/employee.svg"
import myImage from "../../assets/images/hi-five.png"
import "../Greeting/GreetingStyle.css"
import TypingText from './TypingText'
import SocialMedia from "../Links/SocialMedia"
//import employee from "../../assets/images/Employee.jfif"
const Greeting = () => {
  return (
    <div className='greeting' style={{margin:"0px 50px"}}>
      <div className='greeting-header-div'>
        <h1>Hi There 👋🏻 </h1>
        <TypingText/>
        <SocialMedia/>
        <div className='btn-home-div'><Link to="/contact" className='btn'> Contact Me </Link> </div>
        </div>
        <div>
        <img className = "greeting-image"src={employee} alt='employee-svg'/>
        </div>
    </div>
  )
}

export default Greeting
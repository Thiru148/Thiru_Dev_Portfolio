import React from 'react'
import { education } from '../../portfolio'
import educationLogo from "../../assets/svgs/education-heading.svg"
import CertificationCard from './CertificationCard'
import DegreeCard from './DegreeCard'
import "./DegreeStyle.css"
const Degree = () => {
  return (
    <div style={{margin:"0px 50px"}}>
        <div className='edu-heading-div'>
        <img src={educationLogo} alt='education-icon'/>
        <div className="edu-details"style={{textAlign:"center"}}>
            <h1 style={{fontSize:"3rem"}}>Education</h1>
            <h2 style={{fontSize:"1.5rem",color:"rgba(255,255,255,0.8)"}}>Basic Qualification and certifications</h2>
            <p style={{fontSize:"1rem",color:"rgba(255,255,255,0.6)"}}>I actively participate in tech-related activities. Below are some of my certifications.</p>
        </div>
        </div>
        <h1 style={{textAlign:"center",fontSize:"2.5rem",padding:"20px",margin:"10px"}}>Degrees Received</h1>
        <DegreeCard/>
        <h1 style={{textAlign:"center",fontSize:"2.5rem",padding:"20px",margin:"10px"}}>Certifications</h1>
        <CertificationCard/>
        </div>
  )
}

export default Degree
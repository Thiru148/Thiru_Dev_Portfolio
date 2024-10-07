import React from 'react'
import experienceHeading from "../../assets/svgs/experience-heading.svg"
import { experience } from '../../portfolio'
import "../ExperienceCard/ExperienceCardStyle.css"
import WorkExperience from '../WorkExperience/WorkExperience'
const ExperienceCard = () => {
    
  return (
    <div style={{margin:"0px 50px",marginTop:"50px"}}>
        <div className="experience-card">
        <img src={experienceHeading} alt='experience-heading-image'/>
        <div className="experience-heading-div">
            <h1>{experience.title}</h1>
            <h2>{experience.subtitle}</h2>
            <p style={{color:"rgba(255,255,255,0.4)",padding:"10px",lineHeight:"30px",fontSize:"1.2rem"}}>{experience.description}</p>
        </div>
        </div>
        <WorkExperience/>
    </div>
  )
}

export default ExperienceCard
import React from 'react'
import projectHeadingSvg from "../../assets/svgs/projects-heading.svg"
import {projectsHeader} from '../../portfolio'
import "../Projects/ProjectsHeadingStyle.css"
const ProjectsHeading = () => {
  return (
    <div style={{margin:"0px 50px"}}>
        <div className='project-heading-div'>
        <img src={projectHeadingSvg} alt="Projects Heading" />
        <div className='project-header-title'>
        <h1 style={{textAlign:"center",fontSize:"2.5rem",fontWeight:"bold"}}>{projectsHeader.title}</h1>
        <p style={{color:"rgba(255,255,255,0.8)",lineHeight:"1.5",fontSize:"1.2rem"}}>{projectsHeader.description}</p>
        </div>
        </div>
    </div>
  )
}

export default ProjectsHeading
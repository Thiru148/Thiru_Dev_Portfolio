import React from 'react'
import { skillSet } from '../../portfolio'
import "../Home-body/BodyStyles.css"
import skillImage from "../../assets/svgs/skill-header-image.svg"
import SkillsLogos from './SkillsLogos'
export default function Body() {
    const {title, skills} = skillSet
  return (
    <div style={{margin:"0px 50px"}}>
    <h1 style={{textAlign:"center"}}>Here's what I Do</h1>
    <div className='skill-header-div'>
    <img className = "skill-header-image"src={skillImage} alt='skill-header-image'/>
    <div className='skill-logos-flex-div'>
    <h1 className='home-title'>{title}</h1>
    <SkillsLogos/>  </div>
    </div>
    <ul className='home-list'>
    {skills.map(item=>{
        return(    
            <li className='flex-item' style={{color:"rgba(255, 255, 255, 0.6)",lineHeight:"2"}}>{item}</li>
        
        ) 
    })}</ul>
    </div>
  )
}

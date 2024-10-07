import React from 'react'
import { experience } from '../../portfolio'
import "../WorkExperience/WorkExperienceStyle.css"
const WorkExperience = () => { 
  return (
    <div>
      <div className='work-experience'>
        <div className='work-experience-div'>
            <h1 className='work-experience-title'>{experience.sections[0].title}</h1>
            <div className='experinece-div'>
                <h3>{experience.sections[0].experiences[0].title}</h3>
                <h5>{experience.sections[0].experiences[0].duration}</h5>
                <h5>{experience.sections[0].experiences[0].company}</h5>
                <h5>{experience.sections[0].experiences[0].location}</h5>
                <h5>{experience.sections[0].experiences[0].description}</h5>
            </div>
            <div className='experinece-div'>
                <h3>{experience.sections[0].experiences[1].title}</h3>
                <h5>{experience.sections[0].experiences[1].duration}</h5>
                <h5>{experience.sections[0].experiences[1].company}</h5>
                <h5>{experience.sections[0].experiences[1].location}</h5>
                <h5>{experience.sections[0].experiences[1].description}</h5>
            </div>
        </div>
        <div className='work-experience-div'>
            <h1 className='work-experience-title'>{experience.sections[1].title}</h1>
            <div className='experinece-div'>
                <h3>{experience.sections[1].experiences[0].title}</h3>
                <h5>{experience.sections[1].experiences[0].duration}</h5>
                <h5>{experience.sections[1].experiences[0].company}</h5>
                <h5>{experience.sections[1].experiences[0].location}</h5>
                <h5>{experience.sections[1].experiences[0].description}</h5>
            </div>
            <div className='experinece-div'>
                <h3>{experience.sections[1].experiences[1].title}</h3>
                <h5>{experience.sections[1].experiences[1].duration}</h5>
                <h5>{experience.sections[1].experiences[1].company}</h5>
                <h5>{experience.sections[1].experiences[1].location}</h5>
                <h5>{experience.sections[1].experiences[1].description}</h5>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WorkExperience
import React from 'react'
import { projects } from '../../portfolio'
const ProjectsList = () => {
  return (
    <div style={{margin:"0px 50px"}}    >
        <div className='projects-div'>
        
            <div className='project'>
                <h3>{projects.data[0].name}</h3>
                <h5>{projects.data[0].description}</h5>
                <ul className='languages-list'>
                    {projects.data[0].languages.map(item=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <div className='project'>
                <h3>{projects.data[1].name}</h3>
                <h5>{projects.data[1].description}</h5>
                <ul className='languages-list'>
                    {projects.data[1].languages.map(item=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <div className='project'>
                <h3>{projects.data[2].name}</h3>
                <h5>{projects.data[2].description}</h5>
                <ul className='languages-list'>
                    {projects.data[2].languages.map(item=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <div className='project'>
                <h3>{projects.data[3].name}</h3>
                <h5>{projects.data[3].description}</h5>
                <ul className='languages-list'>
                    {projects.data[3].languages.map(item=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <div className='project'>
                <h3>{projects.data[4].name}</h3>
                <h5>{projects.data[4].description}</h5>
                <ul className='languages-list'>
                    {projects.data[5].languages.map(item=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
            <div className='project'>
                <h3>{projects.data[5].name}</h3>
                <h5>{projects.data[5].description}</h5>
                <ul className='languages-list'>
                    {projects.data[5].languages.map(item=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProjectsList
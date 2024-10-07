import React from 'react'
import { education } from '../../portfolio'
import svuClgLogo from "../../assets/images/svu.jfif"
import jntuClgLogo from "../../assets/images/jntua_logo.png"
const DegreeCard = () => {
    const {degrees} = education;
    const[SVU,JNTU] = degrees
    //console.log(SVU.clgName);
    //const{clgName,specialization,duration,locations,description,clgUrl} =JNTU
  return (
    <div>
        <div className="edu-card">
        <div className='edu-svu-card-div'>
            <div className='edu-clg-logo-div'><img src={svuClgLogo} alt='svu-clg-logo'/></div>
        <ul className='card-details-div'>
            <div className='edu-clg-details'>
            <li>{SVU.clgName}</li>
            <li style={{textAlign:"end"}}>{SVU.duration}</li>
            <li>{SVU.specialization}</li> </div>
            <div className='edu-description'>
            {SVU.descriptions.map(item=>{
                return(<li>{item}</li>)
            } )}
            </div>
        <div className='visit-website-div'><a href={SVU.clgUrl} target="_blank">Vist Wesite</a></div>
        </ul>
        </div>
        
        <div className='edu-jntu-card-div'>
        <div className='edu-clg-logo-div'><img src={jntuClgLogo} style={{width:"150px"}} alt='svu-clg-logo'/></div>
        <ul className='card-details-div'>
            <div className='edu-clg-details'>
            <li>{JNTU.clgName}</li>
            <li>{JNTU.duration}</li>
            <li>{JNTU.specialization}</li> </div>
            <div className='edu-description'>
            {JNTU.descriptions.map(item=>{
                return(<li>{item}</li>)
            } )}
            </div>
            <div className='visit-website-div'>
                <a href={JNTU.clgUrl} target="_blank">Vist Wesite</a>
                </div>
        </ul>
        </div>
        </div>
        
    </div>
  )
}

export default DegreeCard
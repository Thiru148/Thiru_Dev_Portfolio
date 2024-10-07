import React from 'react'
import { Github,Instagram,Twitter,Linkedin,Gmail } from './Link'
import { socialMediaLinks } from '../../portfolio'
import "./SocialMediaStyles.css"
const SocialMedia = () => {
    console.log(socialMediaLinks.github);
  return (
    <div className='socialMedia'>
        <Github url={socialMediaLinks.github}/>
        <Gmail url={socialMediaLinks.gmail}/>
        <Twitter url ={socialMediaLinks.twitter}/>
        <Linkedin url={socialMediaLinks.linkedin} />
        <Instagram url={socialMediaLinks.instagram} />
    </div>
  )
}

export default SocialMedia;
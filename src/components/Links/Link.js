import React from 'react'
import {FaGithub, FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa"
import {SiGmail} from 'react-icons/si'
import "./SocialMediaStyles.css"
const Github = ({url}) => {
  return (
    <div>
         <a href={url} target="_blank" rel="noopener noreferrer">
            <FaGithub className ="icon github" size={20} />
        </a>
    </div>
  )
}
const Instagram= ({url}) => {
    return (
      <div>
           <a href={url} target="_blank" rel="noopener noreferrer">
              <FaInstagram className ="icon instagram"size={20} />
          </a>
      </div>
    )
  }
  const Twitter = ({url}) => {
    return (
      <div>
           <a href={url} target="_blank" rel="noopener noreferrer">
              <FaTwitter className ="icon twitter" size={20} />
          </a>
      </div>
    )
  }
  const Linkedin = ({url}) => {
    return (
      <div>
           <a href={url} target="_blank" rel="noopener noreferrer">
              <FaLinkedin  className ="icon linkedin" size={20} />
          </a>
      </div>
    )
  }
const Gmail=({url})=>{
return(
    <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
              <SiGmail className ="icon gmail" size={20} />
          </a>
    </div>
)
}
export {Github,Instagram,Twitter,Linkedin,Gmail};
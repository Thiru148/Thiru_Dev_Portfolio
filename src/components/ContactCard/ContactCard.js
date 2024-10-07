import React from 'react'
import myImage from '../../assets/images/Thiru_image.png'
import { contactPageData } from '../../portfolio'
import SocialMedia from '../Links/SocialMedia'
import '../ContactCard/ContactCardStyle.css'
const ContactCard = () => {
  return (
    <div style={{margin:"0px 50px"}}>
        <div className="contact-header-div">
        <img className ='contact-header-image'src={myImage} alt='Thiru-Profile-Image'/>
        <div className='contact-heading'>
        <h1>{contactPageData.contactSection.title}</h1>
        <p>{contactPageData.contactSection.description}</p>
        <SocialMedia />
        <a href='https://github.com/Thiru148/Thiru_Resume' target='_blank' className='btn'>See My Resume</a>
        </div>
        </div>
    </div>
  )
}

export default ContactCard
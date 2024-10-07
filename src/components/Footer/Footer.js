import React from 'react'
import "../Footer/FooterStyle.css"
import loveicon from "../../assets/images/love-icon.png"
import { personalData } from '../../portfolio'
const Footer = () => {
    
  return (
    <div>

        {/* <footer className='footer'>Made with <img style={{width:"15px",height:"15px"}}src={loveicon} alt='love-icon'/> by {personalData.nickName}</footer> */}
<footer className="animated-footer">
  <div className="footer-content">
    <p>© 2024 All rights reserved.</p>
    <p>Developed by Thirumala Satharla</p>
    <p>Full Stack Developer</p>
  </div>
</footer>
    </div>
  )
}

export default Footer;
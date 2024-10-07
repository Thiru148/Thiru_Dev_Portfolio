import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const TypingText = () => {
  return (
    <div className='typing-text'>
    <TypeAnimation
      sequence={[
        `I'm a Web Developer.`,1000,
        `I love coding in React JS`, 1000, 
        `Let's create something amazing!`, 1000,
        ``,2000
      ]}
      speed ={50}
      deletionSpeed ={40}
      wrapper="h3"
      cursor={true}
      repeat={Infinity}
      />
    </div>
  )
}

export default TypingText
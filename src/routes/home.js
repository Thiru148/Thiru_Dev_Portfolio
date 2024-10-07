import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/Footer/Footer'
import Greeting from '../components/Greeting/Greeting'
//import SocialMedia from '../components/Links/SocialMedia'
import Body from '../components/Home-body/Body'
const Home = () => {
  return (
    <div>
       <Navbar/>
       <Greeting/>
       <Body/>
       <Footer/>
    </div>
  )
}

export default Home
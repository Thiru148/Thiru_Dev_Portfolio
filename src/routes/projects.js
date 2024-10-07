import React from 'react'
import Navbar from '../components/NavBar/Navbar'
import Footer from '../components/Footer/Footer'
import ProjectsHeading from '../components/Projects/ProjectsHeading'
import ProjectsList from '../components/Projects/ProjectsList'
const Projects = () => {
  return (
    <div>
      <Navbar/>
      <ProjectsHeading/>
      <ProjectsList/>
      <Footer/>
    </div>
  )
}

export default Projects
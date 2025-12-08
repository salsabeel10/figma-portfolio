import { ToastContainer } from 'react-toastify';
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkProcess from './components/WorkProcess' 
import PersonalProjects from './components/PersonalProjects'
import ProjectIdea from './components/ProjectIdea'
import Blog from './components/Blog'
import Clients from './components/Clients'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CompanyProjects from './components/CompanyProjects'
import What from './components/What'
import About from './components/About';




const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WorkProcess />
      <CompanyProjects />
      <Clients />
      <PersonalProjects />
      <ProjectIdea />
      <What />
      <Blog />
      <ContactForm />
      <Footer />
      <ToastContainer position="top-center" />
    </div>
  )
}

export default App
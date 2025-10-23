import React from 'react'
import Nabar from './components/Nabar'
import Hero from './components/Hero'
import Hero_1 from './components/Hero_1'
import WorkProcess from './components/WorkProcess' 
import PersonalProjects from './components/PersonalProjects'
import ProjectIdea from './components/ProjectIdea'
import Blog from './components/Blog'
import WhatIDo from './components/WhatIdo'
import Clients from './components/Clients'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import CompanyProjects from './components/CompanyProjects'


const App = () => {
  return (
    <div>
      <Nabar />
      <Hero />
      <Hero_1 />
      <WorkProcess />
      <CompanyProjects />
      <PersonalProjects />
      <ProjectIdea />
      <Clients />
      <WhatIDo />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
import React from 'react'
import Nabar from './components/Nabar'
import Hero from './components/Hero'
import Hero_1 from './components/Hero_1'
import WorkProcess from './components/WorkProcess' 
import Projects from './components/Projects'
import ProjectIdea from './components/ProjectIdea'
import Blog from './components/Blog'
import WhatIDo from './components/WhatIdo'
import Clients from './components/Clients'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Nabar />
      <Hero />
      <Hero_1 />
      <WorkProcess />
      <Projects />
      <ProjectIdea />
      <Blog />
      <WhatIDo />
      <Clients />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
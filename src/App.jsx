import React from 'react'
import Nabar from './components/Nabar'
import Hero from './components/Hero'
import Hero_1 from './components/Hero_1'
import WorkProcess from './components/WorkProcess' 
import Projects from './components/Projects'
import ProjectIdea from './components/ProjectIdea'
import Blog from './components/Blog'


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
    </div>
  )
}

export default App
import { ToastContainer } from 'react-toastify';
import { lazy, Suspense } from "react"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
// Lazy load below-the-fold components
const About = lazy(() => import('../components/About'));
const WorkProcess = lazy(() => import('../components/WorkProcess'));
const PersonalProjects = lazy(() => import('../components/PersonalProjects'));
const ProjectIdea = lazy(() => import('../components/ProjectIdea'));
const Blog = lazy(() => import('../components/Blog'));
const Clients = lazy(() => import('../components/Clients'));
const ContactForm = lazy(() => import('../components/ContactForm'));
const Footer = lazy(() => import('../components/Footer'));
const CompanyProjects = lazy(() => import('../components/CompanyProjects'));
const What = lazy(() => import('../components/What'));

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="flex h-40 items-center justify-center text-gray-400">Loading content...</div>}>
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
      </Suspense>
      <ToastContainer position="top-center" />
    </>
  )
}

export default MainPage
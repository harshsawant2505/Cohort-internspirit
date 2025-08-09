
import './App.css'
import HeroSection from './components/Hero'
import ProjectSection from './components/Projects'
import Navigation from './components/Navigation'
import ContactForm from './components/Contact'

function App() {
 

  return (
    <div className='w-full p p-0 overflow-x-hidden'>
      <Navigation />
      <HeroSection />
      <ProjectSection />
      <ContactForm />

    </div>
  )
}

export default App

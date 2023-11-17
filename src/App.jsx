import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Skills from './components/Skills'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Work />
        <Contact />
        <Skills />
      </div>
    </>
  )
}

export default App

import { useState } from 'react'


import NavScrollExample from './Components/Navbar'
import Hero from './Components/Hero'
import WeHave from './Components/WeHave'
import Features from './Components/Features'
import Plans from './Components/Plans'
import Network from './Components/Network'
import HappyCus from './Components/HappyCus'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>

      <NavScrollExample />
      <Hero />
      <WeHave />
      <Features />
      <Plans />
      <Network />
      <HappyCus />
      <Subscribe />
      <Footer />




    </header>
    
    </>
  )
}

export default App

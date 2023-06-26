import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import MyProjects from './components/MyProjects'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import MagicNav from './components/MagicNav'
import Footer from './components/Footer'
import logo from '../src/assets/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div style={{ background: 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)' }} className='overflow-x-hidden overflow-y-hidden '>

      <div className='relative'>
        <MagicNav></MagicNav>


        <div className='space-y-40 '>

          <div id='welcome' className='' >

            <Banner ></Banner>
          </div>
          <div id='about'>

            <AboutMe></AboutMe>

          </div>
          <div id='skills'>
            <Skills></Skills>

          </div>
          <div id='projects'>
            <MyProjects></MyProjects>

          </div>
          <div id='contact'>
            <ContactMe></ContactMe>

          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
    // style={{ background: 'linear-gradient(90deg, #07233B 1.67%, #041D34 39.95%, #04192D 58.24%, #040E18 80.28%, #050C16 101.48%)' }}
  )
}

export default App

import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Missions from './Components/Missions/Missions'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/footer'
import Hobbies from './Components/Hobbies/Hobbies'
import Education from './Components/Education/Education'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='The Result of Hardwork' Title='My Projects'/>
        <Missions/>
        <About/>
        <Title subTitle='The Journey Of' Title='My Academics'/>
        <Education/>
        <Title subTitle='My Passion Palette' Title='Hobbies'/>
        <Hobbies/>
        <Title subTitle='Ping me on' Title='My Contacts'/>
        <Contact/>
        <Footer/>
      </div>
      
    </div>
  )
}

export default App

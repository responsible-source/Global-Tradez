import React, { useState } from 'react'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import { homeObjOne, homeObjTwo } from '../InfoSection/Data'
import Info from '../InfoSection/Info'
import Navbar from '../Navbar/Navbar'
import Service from '../Service/Service'
import Sidebar from '../Sidebar/Sidebar'


const Home = () => {
    const [isOpen, Setisopen] = useState(false)

    const toggle = ()=>{
        Setisopen(!isOpen)
    }
  return (
    <div>
        <Sidebar  toggle={toggle} isOpen={isOpen}/>
        <Navbar toggle ={toggle}/>
        <Hero />
        <Info {...homeObjOne} />
        <Info {...homeObjTwo} />
        <Service />
        <Footer />
    </div>
  )
}

export default Home
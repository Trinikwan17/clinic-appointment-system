import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Conatct from './pages/Contact'
import Myprofile from './pages/Myprofile'
import Myappointment from './pages/MyAppointment'
import Appointment from './pages/Appointment' 
import Navbar from './components/Navbar'
import Header from './components/Header'
import SpecialityMenu from './components/SpecialityMenu'
import TopDoc from './components/TopDoc'
import Footer from './components/Footer'

function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Conatct />} />
        <Route path='/My-profile' element={<Myprofile />} />
        <Route path='/My-appointment' element={<Myappointment />} />
        <Route path='/Appointment/:docID' element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from  "./pages/Home"
import Doctors from "./pages/Doctors"
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppoiments from './pages/MyAppoiments'
import Appoiments from './pages/Appoiments'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className = 'mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/doctors' element= {<Doctors />}/>
        <Route path='/doctors/:speciality' element= {<Doctors/>}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/contact' element= {<Contact />}/>
        <Route path='/my-profile' element= {<MyProfile />}/>
        <Route path='/my-appoiments' element= {<MyAppoiments />}/>
        <Route path='/appoiments/:docId' element= {<Appoiments />}/>







      </Routes>
    
    </div>
  )
}

export default App

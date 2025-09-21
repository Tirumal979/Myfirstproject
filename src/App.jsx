import react from 'react'
import './App.css'
import { BrowserRouter, } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import Contactus from './components/Contactus.jsx'
import Blog from './components/Blog.jsx'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Banner />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contactus' element={<Contactus />}/>
        </Routes>
      </BrowserRouter>
      
     
    </>
  )
}

export default App

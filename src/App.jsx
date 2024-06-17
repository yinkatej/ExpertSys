import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Welcome from './components/welcome'
import Questions from './components/questions'

function App() {
  
  return (
    <div className='h-screen'>
      <Navbar />
      <Questions/>
      <Footer />
    </div>
  )
}

export default App

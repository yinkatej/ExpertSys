import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Welcome from './components/welcome'
import Questions from './components/questions'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient()
function App() {
  
  return (
    <Router>
        <QueryClientProvider client={queryClient}>
        <div className='h-screen'>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<Welcome />}></Route>
            <Route  path='/query' element={<Questions />}></Route>
          </Routes>
      
      <Footer />
      </div>
      </QueryClientProvider>
    </Router>
    
  )
}

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Tv from './pages/Tv'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/tv' element={<Tv />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

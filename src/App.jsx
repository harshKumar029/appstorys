import React from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import BottomNavigationBar from './components/BottomNavigationBar'

const App = () => {
  return (
    <>
    <Navbar />
    <Home/>
    <BottomNavigationBar/>
    </>
  )
}

export default App

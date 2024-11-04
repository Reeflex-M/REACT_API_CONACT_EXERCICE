import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './component/navbar'
// import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <h1 className="text-2xl font-bold">accueil</h1>
      <Outlet />
    </>
  )
}

export default App

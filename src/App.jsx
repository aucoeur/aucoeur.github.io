import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Main from './components/Main/Main'
import Tools from './components/Tools/Tools'

import './App.css'

// Check if OS darkmode set using css media query
const prefersDark = () => {
  const dark = window.matchMedia('(prefers-color-scheme: dark)')
  return dark.matches
}

function App() {
  // Set initial state to OS preference
  const [theme, setTheme] = useState(prefersDark)
  const [toggle, setToggle] = useState(false)

  return (
    <div className={`App ${theme ? 'dark' : 'light'} ${toggle ? 'toggled' : ''}`}>
      <button className='toggle-theme' onClick={() => setTheme(!theme)}>Toggle Theme</button>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </div>
  )
}

export default App

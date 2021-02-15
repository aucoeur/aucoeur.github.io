import React, { useState } from 'react';
import './assets/theme.css';
import './App.css';

import Header from './components/Header/Header'

function App() {

  // Check if OS darkmode set using css media query
  const prefersDark = () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)');
    return dark.matches
  }

  // Set initial state to OS preference
  const [theme, setTheme] = useState(prefersDark);

  return (
      <div className={`App ${theme ? 'dark': 'light'}`}>
          <div className='corner'>
            <button onClick={() => setTheme(!theme)}> Toggle </button>
          </div>
          <Header />
      </div>
  );
}

export default App;

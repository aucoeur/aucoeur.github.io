import React, { useState } from 'react';

import './App.css'

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
            <button onClick={() => setTheme(!theme)}> Toggle Theme </button>
          </div>
          <h1>Hello World</h1>
          <h3>Itme STINE</h3>
          <p>Ahuhuhuhuh hi hello</p>
      </div>
  );
}

export default App;

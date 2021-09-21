import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './components/Main/Main';
// import SideBar from './components/SideBar/SideBar';

// import About from './components/About/About';
// import Projects from './components/Projects/Projects';
// import Work from './components/Work/Work';
// import Contact from './components/Contact/Contact';

import './App.css'

// Check if OS darkmode set using css media query
const prefersDark = () => {
  const dark = window.matchMedia('(prefers-color-scheme: dark)');
  return dark.matches
}

function App() {
  // Set initial state to OS preference
  const [theme, setTheme] = useState(prefersDark);
  const [toggle, setToggle] = useState(false);
  const [collapse, setCollapse] = useState(false)

  return (
    <div className={`App ${theme ? 'dark': 'light'} ${toggle ? 'toggled' : ''}`}>

      <button className='toggle-theme' onClick={() => setTheme(!theme)}>Toggle Theme</button>
      {/* <SideBar /> */}
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/contact" component={Contact} /> */}
      </Switch>
    </div>
  );
}

export default App;

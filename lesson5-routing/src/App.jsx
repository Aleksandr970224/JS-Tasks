import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contacts from './Components/Contacts/Contacts';
import { Links } from './Components/Link/Links'

import './App.css'

function App() {
  return (
    <>
      <div className='container'>
        <nav className='nav-link'>
          <ul>
            <li>
              <Links to="/">Home</Links>
            </li>
            <li>
              <Links to="/About">About</Links>
            </li>
            <li>
              <Links to="/Contacts">Contacts</Links>
            </li>
          </ul>
        </nav>

        <div className='wrapper-content-main'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

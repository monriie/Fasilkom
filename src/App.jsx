import React from 'react';
import {Routes, Route} from 'react-router';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Routing from './routing/Routing';
// import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Routing />
    </>
  )
}

export default App
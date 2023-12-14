import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/contact/Contact';
const App = () => {
  return (
    <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={ <About/> } />
        <Route path="/blog" element={ <Blog/> } />
        <Route path="/contact" element={<Contact/> } />
       </Routes>
      </Router>
  )
}

export default App
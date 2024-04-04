import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Design from './pages/Design';
import Development from './pages/Development';
import Marketing from './pages/Marketing';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/development" element={<Development />} />
          <Route path="/marketing" element={<Marketing />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
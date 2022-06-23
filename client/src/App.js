import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route 
            path='/'
            element={<h1 className='display-4'>Login/Signup is in header. Adjust routes in client/src/App.js to direct user.</h1>}
          />
        </Routes>
      </>
    </Router>
  );
}

export default App;

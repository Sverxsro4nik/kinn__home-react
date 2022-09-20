import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './style.scss';
import Header from './components/HeaderComponents/Header';
import Landing from './components/LandingComponents/Landing';
import Footer from './components/FooterComponents/Footer';

function App() {
  return (
    <div className='App wrapper'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

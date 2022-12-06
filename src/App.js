import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/nav';
import Home from './pages/Home';
import Calculation from './pages/Calculation';
import Quote from './pages/Quote';
import './App.css';

const App = () => (
  <>

    {/* <Calculator /> */}
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="calculation" element={<Calculation />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

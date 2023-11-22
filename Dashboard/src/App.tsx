import React from 'react';

import './App.css';
import Customers from './customers';

import Dashboard from './dashboard';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './orders';

function App() {
  return (
    <div className="App">
     
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          <Route path="/Customers" element={<Customers/>} />
          <Route path="/Orders" element={<Orders/>} />
         
        </Routes>
      </BrowserRouter>
    </>
    
      
    </div>
  );
}

export default App;

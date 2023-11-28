import React from 'react';
import Signin from './signin';
import './App.css';
import Customers from './customers';
import Signup from './signup';
// import forget from './forget';

import Dashboard from './dashboard';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './orders';
import Forget from './forget';


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
          <Route path="/signin" element={<Signin/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/forget" element={<Forget/>} />


        </Routes>
      </BrowserRouter>
    </>
    
      
    </div>
  );
}

export default App;

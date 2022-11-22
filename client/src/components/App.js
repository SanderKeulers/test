
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Register from './Register';



const App = () => (
  <BrowserRouter>
    
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route element={<Home />} />
      </Routes>
    </main>

  
  
  </BrowserRouter>


)


export default App;

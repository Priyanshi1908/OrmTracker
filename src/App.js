import './App.css';

import React, { useState } from 'react';
import Input from './Components/Input';
import Status from './Components/Status';
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  

  return (
    <div>
      <BrowserRouter>
          <Routes>

            <Route path="/" element= {<Input/>} />
            <Route path="/Status" element= {<Status/>} />

          </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;

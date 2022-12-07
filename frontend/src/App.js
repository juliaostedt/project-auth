import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from 'components/LogIn.js';
import Register from 'components/Register.js';
import Content from 'components/Content.js';


export const App = () => {
  return (
    <BrowserRouter>
    <main>
    <div className="outer-div">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/content" element={<Content />}/>

  </Routes>
    </div>
    </main>
  </BrowserRouter>
  );
}

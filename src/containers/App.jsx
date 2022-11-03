/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registrar from './Register';
import Information from './Information';
import ThemeContext from '../contexts/ThemeContext';
import './styles/App.css';

export default function App() {
  const [theme, setTheme] = useState('bg-light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Registrar />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  );
}

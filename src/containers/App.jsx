import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registrar from './Register';
import Information from './Information';
import AppContext from '../contexts/AppContext';
import useInitialState from '../hooks/useInitialState';
import './styles/App.css';

export default function App() {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registrar />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>

  );
}

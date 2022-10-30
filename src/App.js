import './styles/App.css';
import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GenresSection from './components/sections/GenresSection';

function App() {
  return (
    <div className="App">
      <Header />
      <GenresSection />
    </div>
  );
}

export default App;

import './styles/App.css';
import React from 'react'
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import GenreSection from './components/sections/GenreSection';
import AnimeSection from './components/sections/AnimeSection';

function App() {

  console.log(process.env.REACT_APP_RAPID_API_KEY)

  return (
    <div className="App">
      <Header />
      <GenreSection />
      <AnimeSection />
    </div>
  );
}

export default App;

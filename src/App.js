import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { GenreSection, AnimeSection } from './components/sections'
import AnimeDetails from "./components/pages/AnimeDetails";
import AnimeVideo from "./components/pages/AnimePlayer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="background"></div>
        <Header />
        {/* <GenreSection /> */}
        <Routes>
          <Route path="/" exact element={<AnimeSection />}/>
          <Route path="/anime-details/:id" exact element={<AnimeDetails />}/>
          <Route path="/watch/:id" exact element={<AnimeVideo />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

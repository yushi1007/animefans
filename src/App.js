import "./styles/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { GenreAnime, AnimeSection, Movies, Popular, TopAiring } from './components/sections'
import AnimeDetails from "./components/pages/AnimeDetails";
import AnimeVideo from "./components/pages/AnimePlayer";
import SearchAnime from "./components/sections/SearchAnime";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<AnimeSection />}/>
          <Route path="/watch/:id" exact element={<AnimeVideo />}/>
          <Route path="/anime-details/:id" exact element={<AnimeDetails />}/>
          <Route path="/movies" element={<Movies />}/>
          <Route path="/popular" element={<Popular />}/>
          <Route path="/topairing" element={<TopAiring />}/>
          <Route path="/genre/:genre" element={<GenreAnime />}/>
          <Route path="/search/:searchTerm" element={<SearchAnime />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

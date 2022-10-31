import "./styles/App.css";
import React from "react";
import Header from "./components/Header";
import GenreSection from "./components/sections/GenreSection";
import AnimeSection from "./components/sections/AnimeSection";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Header />
      <GenreSection />
      <AnimeSection />
    </div>
  );
}

export default App;

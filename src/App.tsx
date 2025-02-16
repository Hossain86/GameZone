import { useState } from "react";
import Block from "./assets/components/fastpractice/Block";
import "./App.css";
import gameData from "./assets/components/fastpractice/gameData";
import GameDetails from "./assets/components/fastpractice/GameDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/fastpractice/Layout";

// Import your new LandingPage
import LandingPage from "./assets/components/LandingPage/LandingPage";
import AddGame from "./assets/components/AddGame/AddGame";

function App() {
  const [filteredGames, setFilteredGames] = useState(gameData);

  return (
    <Router>
      <Routes>
        {/* 1. Landing Page at "/" */}
        <Route path="/" element={<LandingPage />} />

        {/* 2. Games route at "/games" using Layout */}
        <Route
          path="/game"
          element={<Layout games={gameData} setFilteredGames={setFilteredGames} />}
        >
          {/* Nested index route for "/games" */}
          <Route
            index
            element={
              <div className="app-container">
                {filteredGames.map((game) => (
                  <Block key={game.id} {...game} />
                ))}
              </div>
            }
          />
          {/* Game details at "/games/:id" */}
          <Route path=":id" element={<GameDetails games={gameData} />} />
        </Route>
        <Route path="/add-game" element={<AddGame />} />
      </Routes>
    </Router>
  );
}

export default App;

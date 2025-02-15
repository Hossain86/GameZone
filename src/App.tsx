import { useState } from "react";
import Block from "./assets/components/fastpractice/Block";
import "./App.css";
import gameData from "./assets/components/fastpractice/gameData";
import GameDetails from "./assets/components/fastpractice/GameDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/fastpractice/Layout";

function App() {
  const [filteredGames, setFilteredGames] = useState(gameData);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout games={gameData} setFilteredGames={setFilteredGames} />
          }
        >
          {/* Use a relative path for nested routes */}
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
          <Route path="game/:id" element={<GameDetails games={gameData} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

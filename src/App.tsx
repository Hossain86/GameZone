import { useState } from "react";
import Block from "./assets/components/fastpractice/Block";
import "./App.css";
import gameData from "./assets/components/fastpractice/gameData";
import GameDetails from "./assets/components/fastpractice/GameDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./assets/components/fastpractice/Navbar";
import LandingPage from "./assets/components/LandingPage/LandingPage";
import GeneresIntro from "./assets/components/fastpractice/GeneresIntro";

function App() {
  const [filteredGames, setFilteredGames] = useState(gameData);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/game"
          element={
            <Layout games={gameData} setFilteredGames={setFilteredGames} />
          }
        >
          {/* Nested index route for "/games" */}
          <Route
            index
            element={
              <div className="app-container">
                <GeneresIntro games={gameData} setFilteredGames={setFilteredGames}/>
                <div className="Game-container">
                  {filteredGames.map((game) => (
                    <Block key={game.id} {...game} />
                  ))}
                </div>
              </div>
            }
          />
          {/* Game details at "/games/:id" */}
          <Route path=":id" element={<GameDetails games={gameData} />} />
        </Route>
        {/* <Route path="/add-game" element={<AddGame />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

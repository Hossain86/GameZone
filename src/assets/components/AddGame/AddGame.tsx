import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gameData from "../fastpractice/gameData"; // Import current gameData

const AddGame = () => {
  const navigate = useNavigate();
  const [newGame, setNewGame] = useState({
    id: Date.now(), // Generate a unique ID
    imgsrc: "",
    heading: "",
    description: "",
    details: "",
    releaseDate: "",
    developer: "",
    publisher: "",
    genres: "",
    systemRequirements: "",
    platforms: "",
    youtubeGameplay: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Convert genres and platforms to arrays
    const formattedGame = {
      ...newGame,
      genres: newGame.genres.split(",").map((g) => g.trim()), 
      platforms: newGame.platforms.split(",").map((p) => p.trim()), 
    };

    // Save new game data to localStorage
    const updatedGameData = [...gameData, formattedGame];
    localStorage.setItem("gameData", JSON.stringify(updatedGameData));

    // Navigate back to homepage
    navigate("/");
  };

  return (
    <div>
      <h2>Add a New Game</h2>
      <input type="text" name="heading" placeholder="Game Name" onChange={handleChange} />
      <input type="text" name="imgsrc" placeholder="Image URL" onChange={handleChange} />
      <textarea name="description" placeholder="Short Description" onChange={handleChange} />
      <textarea name="details" placeholder="Game Details" onChange={handleChange} />
      <input type="text" name="releaseDate" placeholder="Release Date" onChange={handleChange} />
      <input type="text" name="developer" placeholder="Developer" onChange={handleChange} />
      <input type="text" name="publisher" placeholder="Publisher" onChange={handleChange} />
      <input type="text" name="genres" placeholder="Genres (comma-separated)" onChange={handleChange} />
      <input type="text" name="systemRequirements" placeholder="System Requirements" onChange={handleChange} />
      <input type="text" name="platforms" placeholder="Platforms (comma-separated)" onChange={handleChange} />
      <input type="text" name="youtubeGameplay" placeholder="YouTube Gameplay URL" onChange={handleChange} />
      <button onClick={handleSubmit}>Add Game</button>
    </div>
  );
};

export default AddGame;

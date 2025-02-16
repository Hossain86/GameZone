import "./GeneresIntro.css";

interface Game {
  id: number;
  imgsrc: string;
  heading: string;
  description: string;
  details: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  systemRequirements: string;
  platforms: string[];
  youtubeGameplay: string;
}

interface GenereProps {
  games: Game[];
  setFilteredGames: (games: Game[]) => void;
}

const GeneresIntro: React.FC<GenereProps> = ({ games, setFilteredGames }) => {
  // ✅ Function to filter games by genre
  const handleGenere = (genre: string) => {
    const filtered = games.filter((game) => game.genres.includes(genre));
    setFilteredGames(filtered);
  };

  return (
    <div className="intro-container">
      <h2>Welcome to the Game Section 🎮</h2>
      <p>Here, you can explore different games and their details.</p>
      <h4>Browse all your favourite Genres here</h4>
      
      <div className="genere-buttons">
        <button onClick={() => handleGenere("All")}>All</button>
        <button onClick={() => handleGenere("Action")}>Action</button>
        <button onClick={() => handleGenere("Adventure")}>Adventure</button>
        <button onClick={() => handleGenere("Strategy")}>Strategy</button>
        <button onClick={() => handleGenere("Racing")}>Racing</button>
      </div>

      <div className="genere-buttons">
        <button onClick={() => handleGenere("Sports")}>Sports</button>
        <button onClick={() => handleGenere("Puzzle")}>Puzzle</button>
        <button onClick={() => handleGenere("Educational")}>Educational</button>
        <button onClick={() => handleGenere("Family")}>Family</button>
        <button onClick={() => handleGenere("Simulation")}>Simulation</button>
      </div>
    </div>
  );
};

export default GeneresIntro;

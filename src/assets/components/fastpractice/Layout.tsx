import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Layout.css";

interface Game {
  id: number;
  imgsrc: string;
  heading: string;
  description: string;
  details: string;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[]; // ✅ Corrected to an array
  systemRequirements: string;
  platforms: string[];
  youtubeGameplay: string;
}

interface LayoutProps {
  games: Game[]; // ✅ Update to accept full game objects
  setFilteredGames: (games: Game[]) => void; // ✅ Accept full objects
}

const Layout: React.FC<LayoutProps> = ({ games, setFilteredGames }) => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode") === "true"
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Toggle dark mode 🌙☀️
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // Handle search 🔍
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const filtered = games.filter((game) =>
      game.heading.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredGames(filtered);
  };

  return (
    <div>
      {/* Sticky Navbar */}
      <nav className="navbar-container">
        <div className="nav-left">
          <Link to="/" className="logo">
            🎮 GameZone
          </Link>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search games...🔍"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />

        {/* Dark Mode Toggle */}
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* Page Content */}
      <Outlet />
    </div>
  );
};

export default Layout;

// src/components/TrendingGames.tsx
import React, { useState, useEffect } from 'react';
import './TrendingGames.css'; // Optional: create this file for styling

// Define a TypeScript interface for the game data from the API
interface Game {
  id: number;
  name: string;  // Correct property from API
  image_background: string; // Correct property from API
}

const TrendingGames: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrendingGames = async () => {
      try {
        const response = await fetch(
          'https://api.rawg.io/api/games?key=0a346676f7a84bde9530cc0ec1ff369f&ordering=-rating&page_size=10'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch trending games');
        }
        const data = await response.json();
        setGames(data.results); // "results" contains the list of games
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingGames();
  }, []);

  if (loading) return <div>Loading trending games...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="trending-games-section">
      <h2>Trending Games</h2>
      <div className="trending-games-list">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img
              src={game.background_image} // Use correct API property
              alt={game.name} // Use correct API property
              className="game-image"
              width={200}
              height={120}
            />
            <h3>{game.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingGames;

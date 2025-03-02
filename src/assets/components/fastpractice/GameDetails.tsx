import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./gameDetails.css"; // Optional: create this file for styling

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
  youtubeGameplay:string;
}

interface Props {
  games: Game[];
}

function GameDetails({ games }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the selected game using the id from the URL
  const game = games.find((g) => g.id === Number(id));

  // Rating state (0 to 5)
  const [rating, setRating] = useState<number>(0);

  // Reviews state
  const [reviews, setReviews] = useState<string[]>([]);
  const [newReview, setNewReview] = useState<string>("");

  if (!game) return <h2>Game not found!</h2>;

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview.trim() !== "") {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  return (
    <div className="game-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Back
      </button>

      <img src={game.imgsrc} alt={game.heading} className="game-img" />
      <h2 className="game-header">{game.heading}</h2>
      
      <p className="game-details">{game.details}</p>

      {/* Extended Game Information */}
      <div className="extended-info">
        <p>
          <strong>Release Date:</strong> {game.releaseDate}
        </p>
        <p>
          <strong>Developer:</strong> {game.developer}
        </p>
        <p>
          <strong>Publisher:</strong> {game.publisher}
        </p>
        <p>
          <strong>Genres:</strong> {game.genres.join(", ")}
        </p>
        <p>
          <strong>System Requirements:</strong> {game.systemRequirements}
        </p>
        <p>
          <strong>Platforms:</strong> {game.platforms.join(", ")}
        </p>
        {game.youtubeGameplay && (
        <iframe
          width="560"
          height="315"
          src={game.youtubeGameplay}
          title={game.heading}
          className="game-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
      </div>

      {/* Rating System */}
      <div className="rating-section">
        <h3>Rate this game:</h3>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          >
            {rating >= star ? (
              <FaStar color="gold" />
            ) : (
              <FaRegStar color="gold" />
            )}
          </span>
        ))}
        {rating > 0 && <p>Your rating: {rating} / 5</p>}
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>Reviews:</h3>
        <form onSubmit={handleReviewSubmit} className="review-form">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review..."
            rows={3}
            className="review-textarea"
            
          />
          <button type="submit" className="game-button" style={{margin:"15px",width:"150px"}}>
            Submit Review
          </button>
        </form>
        <div className="reviews-list">
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map((review, index) => (
              <div key={index} className="review-item">
                <p>{review}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default GameDetails;
function userEffecct(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}


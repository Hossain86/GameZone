import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./block.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  id: number;
  imgsrc: string;
  heading: string;
  description: string;
}

function Block({ id, imgsrc, heading, description }: Props) {
  const navigate = useNavigate(); // Initialize navigation function

  // Retrieve like status from localStorage
  const storedLike = localStorage.getItem(`liked-${id}`) === "true";
  const [liked, setLiked] = useState<boolean>(storedLike);

  // Update localStorage when "liked" state changes
  useEffect(() => {
    localStorage.setItem(`liked-${id}`, liked.toString());
  }, [liked, id]);

  return (
    <div className="block-container">
      <img src={imgsrc} alt={heading} className="block-img" />
      <h2 className="block-header">{heading}</h2>
      <p className="block-details">{description.substring(0, 100) + "..."}</p>

      {/* Navigate to Game Details page */}
      <button className="block-button" onClick={() => navigate(`/game/${id}`)}>
        Show More
      </button>

      <div className="block-lower">
        <span onClick={() => setLiked(!liked)} style={{ cursor: "pointer" }}>
          {liked ? <AiFillHeart color="red" size={22} /> : <AiOutlineHeart size={22} />}
        </span>
      </div>
    </div>
  );
}

export default Block;

import React from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.landingSection}>
      <div className={styles.content}>
        <h1 className={styles.gameheader}>
          Explore Gamezone Video Games Database
        </h1>
        <p className={styles.gamedetails}>
          GameZone is your go-to destination for exploring a vast collection of
          video games. With a powerful and user-friendly interface, GameZone
          provides access to detailed game information, reviews, and
          recommendations. Whether you're looking for the latest releases,
          top-rated classics, or hidden gems, our database has you covered.
          Discover, explore, and dive into the world of gaming like never
          before! 🚀🎮
        </p>
        <button className={styles.ctaButton} onClick={() => navigate("/game")}>
          Get Started
        </button><br /><br />
        <button className={styles.ctaButton} onClick={() => navigate("/add-game")}>Add New Game (admin only)</button>

      </div>
      <div className={styles.imageContainer}>
        {/* Replace the src with your own image path or URL */}
        <img /*https://rawg.io/assets/images/cover.117cc320ec2800b9b12092ca23d6e86d.png */
          src="/image.png"
          alt="RAWG Preview"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
};

export default LandingPage;

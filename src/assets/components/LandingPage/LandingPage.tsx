import React, { useEffect, useState } from "react";
import styles from "./LandingPage.module.css";
import { Link, useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("darkMode") === "true"
  );
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);
  return (
    <div className={styles.LandingPageContainer}>
      <nav className={styles.navbarcontainer}>
        <div className={styles.navleft}>
          <Link to="/" className={styles.logo}>
            🎮 GameZone
          </Link>
        </div>

        {/* Dark Mode Toggle */}
        <button
          className={styles.darkmodetoggle}
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* Landing Page Section */}
      <div className={styles.landingSection}>
        <div className={styles.content}>
          <h1 className={styles.gameheader}>
            Explore Gamezone Video Games Database
          </h1>
          <p className={styles.gamedetails}>
            GameZone is your go-to destination for exploring a vast collection
            of video games. With a powerful and user-friendly interface,
            GameZone provides access to detailed game information, reviews, and
            recommendations. Whether you're looking for the latest releases,
            top-rated classics, or hidden gems, our database has you covered.
            Discover, explore, and dive into the world of gaming like never
            before! 🚀🎮
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => navigate("/game")}
          >
            Get Started
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img /*https://rawg.io/assets/images/cover.117cc320ec2800b9b12092ca23d6e86d.png */
            src="/image1.png"
            alt="RAWG Preview"
            className={styles.heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

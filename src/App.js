import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import "./styles.css";

const App = () => {
  const [name, setName] = useState("");
  const [special, setSpecial] = useState(false);

  const specialPerson = "Debangshi Pandey";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSpecial(name.trim().toLowerCase() === specialPerson.toLowerCase());
  };

  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="app-container">
      {special && <Confetti recycle={false} numberOfPieces={300} />}

      <motion.div
        className="content-box"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="main-title">Welcome to the Experience</h1>

        <form onSubmit={handleSubmit} className="form">
          <input
            className="name-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        {special ? (
          <div className="special-content">
            <h2 className="greeting">Hello, {specialPerson}!</h2>
            <p className="description">Happy Birthday My Voice! 💕</p>
            <p className="description">Enjoy this exclusive experience crafted just for you! 🌹</p>

            <div className="image-grid">
              {[...Array(30)].map((_, i) => (
                <motion.img
                  key={i}
                  src={`/images/image${i + 1}.jpg`}

                  alt={`Image ${i + 1}`}
                  className="image"
                  whileHover={{ scale: 1.1 }}
                />
              ))}
            </div>

            <div className="video-section">
              {[1, 2, 3].map((video) => (
                <motion.video
                  key={video}
                  controls
                  className="video"
                  whileHover={{ scale: 1.05 }}
                >
                  <source src={`/videos/video${video}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              ))}
            </div>
          </div>
        ) : (
          <div className="thank-you-content">
            <h2 className="thank-you-title">Thank you! Have a nice day.</h2>
            <p className="current-time">Current time: {currentTime}</p>
          </div>
        )}
      </motion.div>

      <div className="background-animation">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="falling-circle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 5 + 2}s`,
            }}
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;

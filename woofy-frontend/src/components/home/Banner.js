import React, { useState, useEffect } from "react";
import "./Banner.css";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage === 1 ? 2 : 1));
  };

  return (
    <div
      className="banner"
      onMouseEnter={handlePause}
      onMouseLeave={handlePause}
    >
      <div className="slideshow">
        <img src={currentImage === 1 ? "/001.png" : "/002.png"} alt="" />
      </div>
      <div className="controls">
        <button onClick={handleNext}>다음→</button>
      </div>
    </div>
  );
};

export default Banner;

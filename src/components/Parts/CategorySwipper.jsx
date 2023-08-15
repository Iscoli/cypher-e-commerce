import React, { useState, useEffect } from 'react';
import './PartsStyle/CategorySwipper.css'; // Import your custom styles

const CategorySwipper = () => {
  const slides = [
    'Slide 1',
    'Slide 2',
    'Slide 3',
    'Slide 4',
    'Slide 5',
    'Slide 6',
    'Slide 7',
    // Add more slides as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div className="slider-container">
      <div
        className="slider"
        style={{
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`
        }}
      >
        {/* Duplicate slides for infinite looping */}
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {slide}
          </div>
        ))}
        {/* Repeat the slides to create an illusion of infinite loop */}
        {slides.map((slide, index) => (
          <div className="slide" key={index + slides.length}>
            {slide}
          </div>
        ))}
      </div>
      <button className="prev-button" onClick={goToPrevSlide}>
        Prev
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );

};

export default CategorySwipper;

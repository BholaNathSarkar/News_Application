import React, { useState } from "react";
// import "./Slider.css"; // Import your CSS file

function Slider() {
  const slides = [
    { url: "/image-1.jpg", title: "village" },
    { url: "/image-2.jpg", title: "city" },
    { url: "/image-3.jpg", title: "beach" },
    { url: "/image-4.jpg", title: "beach" },
  ];

  const [currentIndex, setcurrentIndex] = useState(0);
  const containerStyles = {
    width: "900px",
    height: "350px",
    margin: "0 auto",
    position: "relative", // Add this to position the arrows relative to the container
  };
  const sliderStyle = {
    height: "100%",
    position: "relative",
  };
  const slideStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    left: "32px",
    fontSize: "45px",
    color: "#d7cece",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0,-50%)",
    right: "32px",
    fontSize: "45px",
    color: "#d7cece",
    zIndex: 1,
    cursor: "pointer",
  };
  const dotContainerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    margin: "4px",
    cursor: "pointer",
    fontSize: "20px",
  };
  const goToSlide = (slideIndex) => {
    setcurrentIndex(slideIndex);
  };
  return (
    <div style={sliderStyle}>
      <div style={containerStyles}>
        <div
          style={leftArrowStyles}
          onClick={() =>
            setcurrentIndex(
              currentIndex === 0 ? slides.length - 1 : currentIndex - 1
            )
          }
        >
          ◄
        </div>
        <div
          style={rightArrowStyles}
          onClick={() =>
            setcurrentIndex(
              currentIndex === slides.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          ►
        </div>
        <div style={slideStyle}></div>
        <div style={dotContainerStyle}>
          {slides.map((slide, slideIndex) => {
            return (
              <div
                key={slideIndex}
                style={dotStyle}
                onClick={() => {
                  goToSlide(slideIndex);
                }}
              >
                ●
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Slider;

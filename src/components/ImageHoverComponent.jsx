import React, { useState } from "react";

const ImageHoverComponent = ({ imageUrl, items }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div
      className="container"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img
        src={imageUrl}
        alt="Something"
        className={`image ${hovered ? "hidden" : "visible"}`}
      />
      <div className={`text ${hovered ? "visible" : "hidden"}`}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageHoverComponent;

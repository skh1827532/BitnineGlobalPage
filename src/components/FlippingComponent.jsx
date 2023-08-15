import React from "react";

const FlippingComponent = ({ frontText, backText }) => {
  return (
    <div className="flipping-component">
      <div className="front-content">
        <p>{frontText}</p>
      </div>
      <ul className="back-content">
        {backText.map((elem, index) => {
          return <li key={index}>{elem}</li>;
        })}
      </ul>
    </div>
  );
};

export default FlippingComponent;

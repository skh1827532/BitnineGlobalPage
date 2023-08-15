import React, { useState } from 'react';

const Button = ({ text }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const buttonStyles = {
    backgroundColor: hovered ? '#001C66' : 'transparent',
    color: hovered ? 'orange' : 'white', // Change the text color to yellow on hover
    fontWeight: 'bold',
    padding: '10px 20px',
    borderRadius: '0.225rem ',
    border: '2px solid #022EA9',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    margin:'12px'
  };

  const animationStyles = {
    content: '',
    position: 'absolute',
    top: '-200%',
    left: '0',
    right: '0',
    bottom: '0',
    background: '#022EA9',
    transition: 'top 0.5s',
    zIndex: -1,
  };

  if (hovered) {
    animationStyles.top = '100%';
  }

  return (
    <button
      style={buttonStyles}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <span style={animationStyles} />
      {text}
    </button>
  );
};

export default Button;

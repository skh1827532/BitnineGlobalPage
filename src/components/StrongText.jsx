import React from 'react';

const StrongText = ({ color, lineHeight, text }) => {
  const strongStyles = {
    color: color || 'inherit', // If color prop not provided, use 'inherit' to preserve the parent's text color
    lineHeight: lineHeight || 'normal', // If lineHeight prop not provided, use 'normal'
   
  };

  return <strong style={strongStyles}>{text}</strong>;
};

export default StrongText;

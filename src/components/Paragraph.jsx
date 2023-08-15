import React from "react";

const Paragraph = ({ text, width, color }) => {
  return <p style={{ width: width ? width : "auto", color: color }}>{text}</p>;
};

export default Paragraph;

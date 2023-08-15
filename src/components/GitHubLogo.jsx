import React from "react";

const LinkWithIcon = ({ link, icon, backgroundColor, color, fontSize }) => {
  const linkStyle = {
    display: "inline-block",
    position: "relative",
    padding: "8px 12px",
    borderRadius: "4px",
    textDecoration: "none",
    overflow: "hidden",
    backgroundColor: backgroundColor || "transparent", // Use the backgroundColor prop or default to transparent
  };

  return (
    <a href={link} target="_blank" style={{ margin: "10px 10px" }}>
      <i
        className={icon}
        style={{ color: color, padding: "2px", fontSize: fontSize }}
      ></i>
    </a>
  );
};

export default LinkWithIcon;

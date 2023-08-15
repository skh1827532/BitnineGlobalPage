import React, { useState } from "react";

const SearchBox = ({ placeholder, backgroundColor, color, parentHeight }) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleBackClick = () => {
    setShowSearch(false);
  };

  const searchStyle = {
    backgroundColor: backgroundColor || "#666",
    color: color || "#999",
    height: "100%", // Set the search box height to 100%
    width: "15vw",
    padding: "11px",
    border: "none",
    outline: "none",
    fontSize: "20px",
    borderRadius: "8px",
    transform: `scaleX(${showSearch ? "1" : "0"})`, // Use transform to control the scaling
    transformOrigin: "right", // Set the transform origin to right for smooth animation
    transition: "transform 1s ease", // Add transition for the transform property
    opacity: showSearch ? "1" : "0", // Use opacity to control visibility
    visibility: showSearch ? "visible" : "hidden", // Set visibility to hidden when the search box is not shown
  };

  const xMarkStyle = {
    position: "absolute",
    right: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    color: "#999",
    background: "#666",
    borderRadius: "50%",
    padding: "2px",
  };

  return (
    <div
      style={{
        position: "relative",
        height: parentHeight || "100%",
        display: "flex", // Set display to flex
        alignItems: "center", // Align items at the center
      }}
    >
      {showSearch ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder={placeholder || "SEARCH"}
            style={searchStyle}
          />
          <div style={xMarkStyle} onClick={handleBackClick}>
            <i className="fas fa-times"></i>
          </div>
        </div>
      ) : (
        <div style={{ cursor: "pointer" }} onClick={handleSearchClick}>
          <i className="fas fa-search"></i>
        </div>
      )}
    </div>
  );
};

export default SearchBox;

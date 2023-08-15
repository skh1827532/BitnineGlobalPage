import React from "react";

const List = ({ heading, listItems }) => {
  return (
    <div style={{ color: "#ababab", textAlign: "left", margin: "20px" }}>
      <h2>{heading}</h2>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyle: "none",
          paddingLeft: 0, // Remove default padding to align with the left edge
        }}
      >
        {listItems.map((elem, index) => {
          return (
            <li key={index} style={{ margin: "2px" }}>
              {elem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

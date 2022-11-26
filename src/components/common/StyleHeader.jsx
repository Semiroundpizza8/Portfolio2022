import React from "react";

const offset = {
  color: "black",
  position: "absolute",
  zIndex: 4,
  top: "-5px",
  right: "-5px",
};
const regular = {
  color: "yellow",
  userSelect: "none",
  transparency: 0.99,
  zIndex: 5,
};

const container = {
  position: "relative",
};

const StyleHeader = ({ children }) => {
  return (
    <span style={container}>
      <span style={regular}>{children}</span>
      <span style={offset}>{children}</span>
    </span>
  );
};

export default StyleHeader;

import React from "react";

const cardHeaders = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "35%",
  maxWidth: "35%",
};

const textStyle = { textAlign: "right", opacity: 0.9 };

const ExperienceHeader = ({ experience }) => {
  return (
    <div style={cardHeaders}>
      <h3 style={textStyle}>{experience.name}</h3>
      <h4 style={textStyle}>{experience.dates}</h4>
      <h4 style={textStyle}>{experience.title}</h4>
    </div>
  );
};

export default ExperienceHeader;

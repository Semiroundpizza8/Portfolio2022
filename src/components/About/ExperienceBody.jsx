import React from "react";

const accomplishments = {
  display: "flex",
  flexDirection: "column",
  textAlign: "left",
};

const cardDetails = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "65%",
  maxWidth: "65%",
};

const text = {
  margin: "5px",
};

const ExperienceBody = ({ experience }) => {
  return (
    <div style={cardDetails}>
      <div style={accomplishments}>
        <h4>Accomplishments:</h4>
        {experience.accomplishments.map((accomplishment) => (
          <p style={text}>- {accomplishment}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceBody;

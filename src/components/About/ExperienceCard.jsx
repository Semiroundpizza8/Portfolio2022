import React from "react";
import ExperienceBody from "./ExperienceBody";
import ExperienceHeader from "./ExperienceHeader";

const card = {
  display: "flex",
  flexDirection: "row",
  gap: "20px",
  margin: "20px",
};

const ExperienceCard = ({ experience }) => {
  return (
    <div style={card}>
      <ExperienceHeader experience={experience} />
      <ExperienceBody experience={experience} />
    </div>
  );
};

export default ExperienceCard;

import React from "react";
import experiences from "./experiences";
import ExperienceCard from "./ExperienceCard";
import StyleHeader from "../common/StyleHeader";

const bodyStyles = {
  background: "#dddddd",
  height: "100%",

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: "40px",
  boxSizing: "border-box",
};

const About = () => {
  return (
    <div style={bodyStyles}>
      <h2>
        <StyleHeader>Experiences:</StyleHeader>
      </h2>
      {experiences.map((experience) => (
        <ExperienceCard experience={experience} />
      ))}
    </div>
  );
};

export default About;

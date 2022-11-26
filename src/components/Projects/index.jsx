import React from "react";
import StyleHeader from "../common/StyleHeader";
import ProjectCard from "./ProjectCard";
import projects from "./projects";

const bodyStyles = {
  background: "#ffffff",
  height: "100%",

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  flexDirection: "column",
  padding: "40px",
  boxSizing: "border-box",
};

const Projects = () => {
  return (
    <div style={bodyStyles}>
      <h2>
        <StyleHeader>Projects:</StyleHeader>
      </h2>
      <div style={{ display: "flex", gap: "2%", flexWrap: "wrap" }}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

import { Card } from "antd";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <Card
      title={project.name}
      extra={<a href="#">Link</a>}
      style={{
        width: "45%",
      }}
    >
      <p style={{ textAlign: "left" }}>{project.description}</p>
      <p style={{ textAlign: "left", marginBottom: 0 }}>
        <b>Technologies Used:</b>
      </p>
      <p style={{ textAlign: "left", marginTop: 0 }}>{project.toolsUsed}</p>
    </Card>
  );
};

export default ProjectCard;

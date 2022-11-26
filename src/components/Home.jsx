import React from "react";
import { Button } from "antd";
import StyleHeader from "./common/StyleHeader";

const bodyStyles = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  flexDirection: "column",
  padding: "40px",
  boxSizing: "border-box",
};

const links = {
  display: "flex",
  gap: "40px",
  marginTop: "20px",
};

const Home = () => {
  return (
    <div style={bodyStyles}>
      <h1>
        <StyleHeader>Ben Odisho</StyleHeader>
      </h1>
      <h3>Fullstack Software Engineer + Instructor</h3>
      <div style={links}>
        <Button>About</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
      </div>
    </div>
  );
};

export default Home;

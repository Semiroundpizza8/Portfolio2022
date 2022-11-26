import React from "react";
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

const Contact = () => {
  return (
    <div style={bodyStyles}>
      <h2>
        <StyleHeader>Contact:</StyleHeader>
      </h2>
      <p>
        For projects or other potential opportunities, feel free to reach out to
        me@benodisho.com. Otherwise, follow one of the links below:
      </p>
    </div>
  );
};

export default Contact;

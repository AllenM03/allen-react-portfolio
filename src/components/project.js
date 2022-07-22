import React from "react";

// create a resuable component for the projects inside the portfolio component
export default function Project({ project }) {
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
  };
  return (
    // each project is a card that contains an image, links to both Github repository and/or published web app and a description.
    <div className="col">
      <div className="card mb-3"></div>
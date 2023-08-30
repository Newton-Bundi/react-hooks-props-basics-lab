import React from "react";

// destructuring the props makes the code easier to understand and read
function Links({ linkedin, github }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={github}>{github}</a>
      <a href={linkedin}>{linkedin}</a>
    </div>
  );
}

export default Links;

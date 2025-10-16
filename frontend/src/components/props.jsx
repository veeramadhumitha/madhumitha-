import React from "react";

const Hello = ({ name, skills }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hello;

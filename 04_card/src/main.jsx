import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  { name: "HTML+CSS", emoji: "💪", color: "#2662d9" },
  { name: "JavaScript", emoji: "💪", color: "#efd81d" },
  { name: "Web Design", emoji: "💪", color: "#b5df85" },
  { name: "Git and GitHub", emoji: "👍", color: "#e84f33" },
  { name: "React", emoji: "💪", color: "#60dafb" },
  { name: "Svelte", emoji: "🧡", color: "#ff3d00" },
];

function App() {
  return (
    <main className="app">
      <ProfileCard />
    </main>
  );
}

function ProfileCard() {
  return (
    <article className="card">
      <img
        className="avatar"
        src="https://github.com/jonasschmedtmann.png"
        alt="Jonas Schmedtmann"
      />

      <div className="card-content">
        <h1>Jonas Schmedtmann</h1>
        <p className="bio">
          Full-stack web developer and teacher at Udemy. When not coding or
          preparing a course, I like to play board games, to cook (and eat), or
          to just enjoy the Portuguese sun at the beach.
        </p>

        <ul className="skill-list">
          {skills.map((skill) => (
            <Skill skill={skill} key={skill.name} />
          ))}
        </ul>
      </div>
    </article>
  );
}

function Skill({ skill }) {
  return (
    <li className="skill" style={{ backgroundColor: skill.color }}>
      <span>{skill.name}</span>
      <span>{skill.emoji}</span>
    </li>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

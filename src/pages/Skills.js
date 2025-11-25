import React from 'react';
import { Link } from 'react-router-dom';

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];
  return (
    <section className="section">
      <h2>Skills</h2>
      <ul className="tags">
        {skills.map((s) => <li key={s} className="tag">{s}</li>)}
      </ul>
      <Link className="btn" to="/">← Back to Home</Link>
    </section>
  );
}

export default Skills;

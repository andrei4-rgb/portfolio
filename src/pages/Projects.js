import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Project 1",
    tech: ["React", "CSS"],
    link: "https://github.com/andrei4-rgb/forecast-app",
    desc: "Simple React app with tensorflow.js"
  },
  {
    title: "Project 2 (ON-GOING)",
    tech: ["Node", "React", "PHP"],
    link: "https://github.com/andrei4-rgb/ccs112-shopeasy-sprint2",
    desc: "Website."
  }
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p className="desc">{project.desc}</p>
      <ul className="tags">
        {project.tech.map((t) => <li key={t} className="tag">{t}</li>)}
      </ul>
      <a className="link" href={project.link} target="_blank" rel="noreferrer">
        GitHub Repo →
      </a>
    </article>
  );
}

function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
      <Link className="btn" to="/">← Back to Home</Link>
    </section>
  );
}

export default Projects;

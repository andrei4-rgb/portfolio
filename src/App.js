import React from "react";
import "./App.css";

const projects = [
  {
    title: "Sample Project 1",
    tech: ["React", "CSS"],
    link: "https://github.com/your-username/sample-project-1",
    desc: "Simple React app demonstrating components and props."
  },
  {
    title: "Sample Project 2",
    tech: ["Node", "Express"],
    link: "https://github.com/your-username/sample-project-2",
    desc: "Basic REST API with CRUD routes."
  }
];

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact" className="cta">Contact</a>
      </nav>
      <div className="hero">
        <h1>Hi, I'm Your Name</h1>
        <p>BSCS, third year — I build simple, functional web apps.</p>
        <a className="btn" href="#projects">View my work</a>
      </div>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>
      <p>
        I’m a BSCS student focusing on web development and clean UI. I enjoy
        building small projects with React, documenting my process, and
        learning by doing. I keep my code readable and my features practical.
      </p>
    </section>
  );
}

function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="tags">
        {skills.map((s) => <li key={s} className="tag">{s}</li>)}
      </ul>
    </section>
  );
}

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
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <ul className="contact-list">
        <li><strong>Email:</strong> your.email@example.com</li>
        <li><strong>GitHub:</strong> <a href="https://github.com/your-username" target="_blank" rel="noreferrer">your-username</a></li>
        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer">your-username</a></li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Name — Portfolio</p>
    </footer>
  );
}

function App() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;

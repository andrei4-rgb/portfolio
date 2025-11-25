import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className="section home">
      <div className="intro-card">
        <img src="/andrei.jpg" alt="Lexin Andrei" className="avatar" />
        <h1 className="fade-in">Hi, I'm Lexin Andrei G. Artillero</h1>
        <p className="subtext">BSCS, third year — I build simple, functional web apps.</p>
        <Link className="btn" to="/projects">View my work</Link>
      </div>

      <div className="quick-links">
        <Link to="/about" className="bubble-link">About</Link>
        <Link to="/skills" className="bubble-link">Skills</Link>
        <Link to="/projects" className="bubble-link">Projects</Link>
        <Link to="/contact" className="bubble-link">Contact</Link>
      </div>

      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </main>
  );
}

export default Home;

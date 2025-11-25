import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="section">
      <h2>About Me</h2>
      <p>
        I’m a third-year BSCS student with a passion for building clean, functional web applications that prioritize user experience and accessibility. My journey into tech started with curiosity and a love for storytelling — now I channel that into crafting interfaces that feel intuitive and expressive.
      </p>
      <p>
        I enjoy working with React, documenting my process clearly, and collaborating with others to solve creative and technical challenges. Whether I’m prototyping a game, designing a portfolio, or debugging a stubborn issue, I approach each task with patience, structure, and a desire to learn.
      </p>
      <p>
        Outside of coding, I’m drawn to cinematic visual storytelling, slice-of-life aesthetics, and modular design systems. I believe that good software should feel human — and I aim to build projects that reflect that philosophy.
      </p>
      <Link className="btn" to="/">← Back to Home</Link>
    </section>
  );
}

export default About;

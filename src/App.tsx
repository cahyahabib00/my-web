import React from 'react';
import './App.css';

function App() {
  const skills = ['Node.js', 'PHP', 'Express', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Docker', 'Git'];

  const projects = [
    {
      title: 'Scalable API System',
      description: 'Built a high-performance REST API handling 10K+ requests/day with comprehensive authentication and rate limiting.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Redis']
    },
    {
      title: 'E-Commerce Backend',
      description: 'Developed complete backend infrastructure for e-commerce platform with payment gateway integration and order management.',
      tech: ['PHP', 'MySQL', 'Stripe API']
    },
    {
      title: 'Microservices Architecture',
      description: 'Designed and implemented microservices-based system with service discovery and inter-service communication.',
      tech: ['Node.js', 'Docker', 'MongoDB', 'RabbitMQ']
    }
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Hi I'm <span className="highlight">Habib</span></h1>
        <p>
          I'm a backend-focused developer from Indonesia with a background in Computer Science.
        </p>
        <p>
          I work at building scalable systems and APIs. Currently focused on Node.js and PHP development.
        </p>
      </header>

      <section className="section">
        <h2>About Me</h2>
        <p>
          My interest in programming started in high school, long before university.
          I began exploring code on my own, building small projects, and gradually
          realizing that software development was the path I wanted to pursue.
        </p>
        <p>
          Since 2020, I've been actively developing my backend skills. Designing APIs,
          working with Node.js and PHP, and learning how real-world systems are built
          beyond theory.
        </p>
        <p>
          I chose to focus on backend development because I enjoy building systems
          that are reliable, scalable, and practical. For me, coding is not just an
          academic requirement, but a long-term commitment to continuous learning
          and creating meaningful solutions.
        </p>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-tag">{skill}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects-list">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Habib. Building the backend of tomorrow.</p>
      </footer>
    </div>
  );
}

export default App;
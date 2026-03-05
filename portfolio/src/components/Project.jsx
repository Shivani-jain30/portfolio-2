import React from "react";

const Project = () => {
  return (
    <section id="project">
      <h2>Projects</h2>
      <div className="card1">
        <h3>StartFiling Landing Page Clone</h3>
        <p>
          Developed a responsive clone of the StartFiling landing page using
          Html and Css. Focused on pixel-perfect layout, responsive design, and
          clean semantic markup to replicate the original UI.
        </p>
        <p><strong>Technologies:</strong>HTML, CSS</p>
        <a href="https://shivani-jain30.github.io/StartupFiling-UI/" target="_blank">Live Demo</a> <br />
        <a href="https://github.com/Shivani-jain30/StartupFiling-UI" target="_blank">Github Repo</a>
      </div>

      <div className="card1">
        <h3>My Portfolio</h3>
        <p>Responsive personal portfolio built using modern web technologies.</p>
        <p><strong>Technologies:</strong>HTML, CSS, JavaScrript</p>
        <a href="https://shivani-jain30.github.io/portfolio-1/" target="_blank">Live Demo</a> <br />
        <a href="https://github.com/Shivani-jain30/portfolio-1" target="_blank">Github Repo</a>
      </div>
    </section>
  );
};

export default Project;

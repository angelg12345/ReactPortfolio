import React from 'react';
import '../styles/ProjectCard.css'

function ProjectCard({ title, description, deployedApp, githubLink }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={deployedApp} target="_blank" rel="noopener noreferrer">DeployedApp</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>
  );
}

export default ProjectCard;
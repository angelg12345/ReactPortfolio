import React from 'react';
import '../styles/Portfolio.css'
import proj1Image from '../images/proj1.jpg'; 
import proj2Image from '../images/proj2.png';
import proj3Image from '../images/proj3.png';
import proj4Image from '../images/proj4.png';
import proj5Image from '../images/proj5.jpg';
import proj6Image from '../images/proj6.jpg';

const projects = [
    {
      title: 'E-commerce Back End',
      description: 'jfdklala',
      imageSrc: proj1Image,
      DeployedLink: 'https://example.com/demo1',
      githubLink: 'https://github.com/example/demo1'
    },
    {
        title: 'Project 1',
        imageSrc: proj2Image,
        DeployedLink: 'https://example.com/demo1',
        githubLink: 'https://github.com/example/demo1'
      },
      {
        title: 'Project 1',
        imageSrc: proj3Image,
        DeployedLink: 'https://example.com/demo1',
        githubLink: 'https://github.com/example/demo1'
      },
      {
        title: 'Project 1',
        imageSrc: proj4Image,
        DeployedLink: 'https://example.com/demo1',
        githubLink: 'https://github.com/example/demo1'
      },
      {
        title: 'Project 1',
        imageSrc: proj5Image,
        DeployedLink: 'https://example.com/demo1',
        githubLink: 'https://github.com/example/demo1'
      },
      {
        title: 'Project 1',
        imageSrc: proj6Image,
        DeployedLink: 'https://example.com/demo1',
        githubLink: 'https://github.com/example/demo1'
      },   ];
export default function Portfolio(){
   return(
    <div className="portfolio">
    {projects.map((project, index) => (
      <div key={index} className="project-card">
        <div className="project-image">
          <img src={project.imageSrc} alt={project.title} />
        </div>
        <div className="project-details">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-links">
          <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">View Deployed</a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    ))}
  </div>
         
    
   
   
   )
    
}
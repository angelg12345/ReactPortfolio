import React from 'react';
import '../styles/Portfolio.css'
import ProjectCard from './ProjectCard';

export default function Portfolio(){
   
    const projects = [
        {
          title: 'Project 1',
          imageSrc: 'path-to-image1.jpg',
          DeployedLink: 'https://example.com/demo1',
          githubLink: 'https://github.com/example/demo1'
        },
        {
            title: 'Project 1',
            imageSrc: 'path-to-image1.jpg',
            DeployedLink: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
          {
            title: 'Project 1',
            imageSrc: 'path-to-image1.jpg',
            DeployedLink: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
          {
            title: 'Project 1',
            imageSrc: 'path-to-image1.jpg',
            DeployedLink: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
          {
            title: 'Project 1',
            imageSrc: 'path-to-image1.jpg',
            DeployedLink: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
          {
            title: 'Project 1',
            imageSrc: 'path-to-image1.jpg',
            DeployedLink: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
      
      ];
   
   
   
    return(
        <div className="portfolio">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
    );
    
}
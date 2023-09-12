import React from 'react';
import '../styles/Portfolio.css'
import ProjectCard from './ProjectCard';

export default function Portfolio(){
   
    const projects = [
        {
          title: 'Project 1',
          description: 'Description ',
          DeployedApp: 'https://example.com/demo1',
          githubLink: 'https://github.com/example/demo1'
        },
        {
            title: 'Project 2',
            description: 'Description',
            DeployedApp: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
          {
            title: 'Project 3',
            description: 'Description',
            DeployedApp: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
          {
            title: 'Project 4',
            description: 'Description',
            DeployedApp: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
          {
            title: 'Project 5',
            description: 'Description',
            DeployedApp: 'https://example.com/demo1',
            githubLink: 'https://github.com/example/demo1'
          },
          {
            title: 'Project 6',
            description: 'Description',
            DeployedApp: 'https://example.com/demo1',
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
import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Project A',
    description: 'Helping disabled children with education.',
    images: [
      '../assets/images/defacto.png',
    ],
  },
  {
    id: 2,
    title: 'Project B',
    description: 'Providing accessibility tools to adults.',
    images: [
      '../assets/images/defacto.png',
    ],
  },
  {
    id: 3,
    title: 'Project C',
    description: 'Community support initiatives.',
    images: [
      '../assets/images/defacto.png',
    ],
  },
];

const Projects = () => {
  return (
    <div>
      <h1>Our Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} style={{ marginBottom: '20px' }}>
            <h2>{project.title}</h2>
            <img
              src={project.images[0]} // Первое изображение 
              alt={`${project.title} preview`}
              style={{ width: '300px', height: 'auto', borderRadius: '8px', marginBottom: '10px' }}
            />
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>Learn More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

import React from 'react';
import { useParams } from 'react-router-dom';

const projectData = [
  {
    id: 1,
    title: 'Project A',
    description: 'Detailed information about Project A.',
    images: [
      '../assets/images/defacto.png',
    ],
  },
  {
    id: 2,
    title: 'Project B',
    description: 'Detailed information about Project B.',
    images: [
      '../assets/images/defacto.png',
    ],
  },
  {
    id: 3,
    title: 'Project C',
    description: 'Detailed information about Project C.',
    images: [
      '../assets/images/defacto.png',
    ],
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === parseInt(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <h2>Event Photos</h2>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${project.title} event ${index + 1}`}
            style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

import "../styles/Projects.css"

function Projects() {
  return (
    <div className='projects'>
      <h1>{/* eslint-disable-next-line */}</h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.images[0]}/>;
        })}
      </div>
    </div>
  )
}

export default Projects

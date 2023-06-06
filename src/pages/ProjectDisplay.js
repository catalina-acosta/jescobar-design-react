import React from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <div className='project-info'>
        <h1> {project.name}</h1>
        <h3> {project.date}</h3>
        <h3> Client: {project.client}</h3>
        <p> {project.description}</p>
      </div>
      <img src={project.images[0]}/>
    </div>
  )
}

export default ProjectDisplay

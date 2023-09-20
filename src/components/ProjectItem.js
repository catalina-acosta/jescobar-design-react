import React from 'react';
import { useNavigate } from "react-router-dom";

function ProjectItem({image, name, id}) {
  const navigate = useNavigate();
  return (
    <div
    className='projectItem'
    onClick={() => {
      navigate("/project/" + id);
    }}>
      <div className='imageContainer'>
        <img src={image} className='bgImage' style={{width: '100%'}} alt=''/>
        <div className='overlay'/>
        <h1 className='projectTitle'>{name}</h1>
    </div>
      </div>
  )
}

export default ProjectItem

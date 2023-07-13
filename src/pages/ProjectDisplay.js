import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css';
import { getSpaceUntilMaxLength } from '@testing-library/user-event/dist/utils';
import CloseIcon from '@mui/icons-material/Close';

function ProjectDisplay() {
  const { id } = useParams();

  const project = ProjectList[id];

  const slides = project.images.map(image => {
    return image;
  });

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const getImg = (slide) => {
    setTempImgSrc(slide);
    setModel(true);
  }

  return (
    <div className='project'>
      <div className='project-info'>
        <h1>{project.name}</h1>
        <h3>{project.subtitle}</h3>
        <h3>{project.date}</h3>
        <h3>Client: {project.client}</h3>
        <p>{project.description}</p>
        <p>{project.description2}</p>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() =>setModel(false)}/>
      </div>
      <div className='gallery'>
        {slides.map((slide, index) => (
          <div className='pics' key={index} onClick={()=>getImg(slide)}>
            <img src={slide} style={{width: '100%'}}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDisplay;

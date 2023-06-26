import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();

  const project = ProjectList[id];

  const slides = project.images.map(image => {
    return image;
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFullScreen, setShowFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setShowFullScreen(!showFullScreen);
  };

  const exitFullScreen = () => {
    setShowFullScreen(false);
  };

  return (
    <div className='project'>
      <div className='project-info'>
        <h1>{project.name}</h1>
        <h3>{project.date}</h3>
        <h3>Client: {project.client}</h3>
        <p>{project.description}</p>
      </div>
      <div className='img-column'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${showFullScreen ? 'full-screen' : ''}`}
            onClick={showFullScreen ? exitFullScreen : toggleFullScreen}
          >
            <img src={slide} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      {showFullScreen && (
        <div className='full-screen-overlay'>
          <div className='full-screen-content'>
            <img src={slides[currentIndex]} alt='Full Screen' />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDisplay;

import {React, useState} from 'react'
import { useParams } from "react-router-dom";
import { ProjectList } from '../helpers/ProjectList';
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();

  const project = ProjectList[id];

  const slides = project.images.map(image => {
    return image;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='project'>
      <div className='project-info'>
        <h1> {project.name}</h1>
        <h3> {project.date}</h3>
        <h3> Client: {project.client}</h3>
        <p> {project.description}</p>
      </div>
      <div className='slides-container'>
        <div className='arrow-container'>
          <div className='right-arrow' onClick={nextSlide} >❰</div>
          <div className='left-arrow' onClick={prevSlide} >❱</div>
        </div>
        <div className='slide' style={{ backgroundImage: `url("${slides[currentIndex]}")` }}></div>
        <div className='dots-container'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='dot'
          >
            ●
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay

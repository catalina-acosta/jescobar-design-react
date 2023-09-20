import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const redirectToProjects = () => {
      navigate('/projects');
    };

    const text = 'Jeronimo Escobar Design';

    const displayTextInterval = setInterval(() => {
      if (text.length > displayText.length) {
        setDisplayText(text.substring(0, displayText.length + 1));
      } else {
        clearInterval(displayTextInterval);
        setShowText(true);
      }
    }, 150);

    if (showText) {
      window.addEventListener('mousedown', redirectToProjects);
      window.addEventListener('touchstart', redirectToProjects);
      return () => {
        window.removeEventListener('mousedown', redirectToProjects);
        window.removeEventListener('touchstart', redirectToProjects);
      };
    }

    return () => clearInterval(displayTextInterval);
  }, [displayText, showText, navigate]);

  return (
    <div className='home'>
      <div className='white-background'>
        <h2>{displayText}</h2>
      </div>
      <div className='skills'></div>
    </div>
  );
}

export default Home;

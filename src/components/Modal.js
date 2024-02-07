import { useNavigate } from 'react-router-dom';
import '../styles/Modal.css';

function Modal({closeModal}) {

  const navigate = useNavigate();


  const redirectToContact = () => {
    navigate('/projects');
  };

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='titleCloseBtn'>
          <button onClick={() => { closeModal(false); redirectToContact(); }}>X</button>
        </div>
        <div className='modalTitle'>
          <h1>Message sent!</h1>
        </div>
        <div className='modalBody'>
          <p>Thank you for your message. I will get back to you as soon as possible.</p>
        </div>
      </div>
    </div>
  )
}

export default Modal

import { render } from 'react-dom';
import amogus from '../../../Assets/image/amogus.gif';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function NotFoundPage() {
  useEffect(() => {
    const element = document.getElementById("details-container");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  },[]);

  
    return (
      <div>
        <div id="details-container" className='error-imagebox'><img className='error-image' src={amogus} alt="error 404" /></div>
        <h1 className='error-title'>404 Not Found</h1>
        
        <span className='error-subtitle'><p>The page you are looking for does not exist.</p><p className='error-link'><Link to='/' >Return to Homepage?</Link></p></span>
      </div>
    );
  };
  
  export default NotFoundPage;
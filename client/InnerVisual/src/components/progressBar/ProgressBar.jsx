import React, { useState, useEffect } from 'react';
import './progressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar');
    switch (progress) {
      case 'five':
        progressBar.style.width = '5%';
        progressBar.style.backgroundColor = '#f63a0f';
        break;
      case 'twentyfive':
        progressBar.style.width = '25%';
        progressBar.style.backgroundColor = '#f27011';
        break;
      case 'fifty':
        progressBar.style.width = '50%';
        progressBar.style.backgroundColor = '#f2b01e';
        break;
      case 'seventyfive':
        progressBar.style.width = '75%';
        progressBar.style.backgroundColor = '#f2d31b';
        break;
      case 'onehundred':
        progressBar.style.width = '100%';
        progressBar.style.backgroundColor = '#86e01e';
        break;
      default:
        progressBar.style.width = '0%';
        progressBar.style.backgroundColor = 'transparent';
        break;
    }
  }, [progress]);

  return (
    <div className="container">
      <input type="radio" className="radio" name="progress" value="five" id="five" onChange={() => setProgress('five')} />
      <label htmlFor="five" className="label">5%</label>

      <input type="radio" className="radio" name="progress" value="twentyfive" id="twentyfive" onChange={() => setProgress('twentyfive')} />
      <label htmlFor="twentyfive" className="label">25%</label>

      <input type="radio" className="radio" name="progress" value="fifty" id="fifty" onChange={() => setProgress('fifty')} />
      <label htmlFor="fifty" className="label">50%</label>

      <input type="radio" className="radio" name="progress" value="seventyfive" id="seventyfive" onChange={() => setProgress('seventyfive')} />
      <label htmlFor="seventyfive" className="label">75%</label>

      <input type="radio" className="radio" name="progress" value="onehundred" id="onehundred" onChange={() => setProgress('onehundred')} />
      <label htmlFor="onehundred" className="label">100%</label>

      <div className="progress">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
};

export default ProgressBar;

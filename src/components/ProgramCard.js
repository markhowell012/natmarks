import React, { useState } from 'react';

function ProgramCard({ title, description, image, clickDescription }) {
  const [showDescription, setShowDescription] = useState(false);
  
  const preventRightClick = (e) => {
    e.preventDefault();
  };

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  }

  return (
    <div className="program-card" onClick={toggleDescription}>
      <img src={image} alt={title} className="program-image" onContextMenu={preventRightClick}/>
      <h2>{title}</h2>
      <p className='progamp'>{description}</p>
      {showDescription && (
        <div className="program-description">
          <p>{clickDescription}</p>
        </div>
      )}
    </div>
  );
}

export default ProgramCard;

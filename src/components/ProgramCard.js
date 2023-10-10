import React from 'react';

function ProgramCard({ title, description, image }) {
  const preventRightClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="program-card">
      <img src={image} alt={title} className="program-image" onContextMenu={preventRightClick}/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProgramCard;

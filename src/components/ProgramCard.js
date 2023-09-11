import React from 'react';

function ProgramCard({ title, description, image }) {
  return (
    <div className="program-card">
      <img src={image} alt={title} className="program-image"/>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProgramCard;

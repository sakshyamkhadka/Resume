import React from 'react';
import '../Styles/CardComponent.css'; 

const CardComponent = ({ title, description, imageUrl, link }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn cardbtn ">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

import { Col } from "react-bootstrap";
import React from 'react';

export const ProjectCard = ({ title, description, imgUrl, youtubeLink }) => {
  const handleClick = () => {
    if (youtubeLink) {
      window.open(youtubeLink, '_blank');
    }
  };
  return (
    <Col size={12} sm={6} md={4}>
     <div className="project-card" onClick={handleClick}>
      <img src={imgUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    </Col>
  )
}

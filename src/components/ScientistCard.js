import React from "react";
import "./ScientistCard.css";

function ScientistCard({ name, field, image, bgColor }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <img
        src={image || "https://via.placeholder.com/300x200?text=No+Image"}
        alt={name}
        className="card-image"
      />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{field}</p>
      </div>
    </div>
  );
}

export default ScientistCard;

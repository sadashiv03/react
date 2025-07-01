import React, { useState } from "react";

const defaultImage = "https://via.placeholder.com/320x180?text=No+Image";

export default function ScientistCard({ name, field, image, bgColor }) {
  const [imgSrc, setImgSrc] = useState(image || defaultImage);

  const handleImageError = () => {
    if (imgSrc !== defaultImage) setImgSrc(defaultImage);
  };

  return (
    <div
      className="scientist-card"
      style={{ backgroundColor: bgColor || "#3498db" }}
    >
      <img
        src={imgSrc}
        alt={`${name}`}
        onError={handleImageError}
        className="scientist-image"
      />
      <h3 className="scientist-name">{name}</h3>
      <p className="scientist-field">{field}</p>
    </div>
  );
}

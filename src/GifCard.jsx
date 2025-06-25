import React from "react";

const GifCard = ({ src, title, username, altText }) => {
  return (
    <div className="gif-card">
      <img src={src} alt={altText || title} className="gif-img" />
      <div className="gif-overlay">
        <p className="gif-title">{title}</p>
        <p className="gif-user">by {username || "unknown"}</p>
      </div>
    </div>
  );
};


export default GifCard;

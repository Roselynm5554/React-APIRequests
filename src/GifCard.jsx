import React from "react";

const GifCard = (props) => {
    const { src } = props;
    return(
        <div className = "gif-card">
            <img src= {src} className="gif-img" />
        </div>
    );
};

export default GifCard;

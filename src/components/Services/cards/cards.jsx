import React from 'react';
import './cards.css'
function Cards({image, txt1, txt2}) {
    return (
        <div className="card">
            <img src={image} alt="" />
            <span>{txt1}</span>
            <span>{txt2}</span>
            <button>LEARN MORE</button>
        </div>
    );
}

export default Cards;
import React from 'react';
import "./style.css";

function Card ({src, handler, alt, id}) {

    return (
        <div className="card grow" onClick={handler} id={id}>
            <img src={src} className="card-img" alt={alt} id={id}/> 
        </div>
    )
}


export default Card

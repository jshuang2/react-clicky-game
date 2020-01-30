import React from 'react';
import "./style.css";

function Card (props) {

    return (
        <div className="card">
            <img src={props.src} className="card-img" alt={props.alt} />
        </div>
    )
}


export default Card

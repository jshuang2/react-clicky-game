import React from 'react';

function Card (props) {

    return (
        <div className="card">
            <img src={props.src} className="card-img-top" alt={props.alt} />
        </div>
    )
}


export default Card

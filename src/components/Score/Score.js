import React from 'react';
import "./style.css";


function Score (props) {


    return (
        <div>
            <h2 className="score">Score: {props.score}</h2>
        </div>
    )
}

export default Score


//  | <span className="highScore">Highscore: {props.highScore}</span>
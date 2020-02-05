import React from 'react';
import "./style.css";


function Score (props) {


    return (
        <div>
            <h2 className="score">Score: {props.score}</h2>
            <p className="text-center font-weight-bold">Click as many characters as you can without picking a duplicate!</p>
        </div>
    )
}

export default Score


//  | <span className="highScore">Highscore: {props.highScore}</span>
import React, { Component } from 'react';
import "./style.css";



class Header extends Component {


    

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark" >
                    <div className="container">
                   <h1>Game of Thrones Memory Game</h1>
                   <h1>Click an image to begin!</h1>
                   </div>
                </nav>
            </div>
        )
    }
}

export default Header 

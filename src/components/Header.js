import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark" >
                    <div className="container">
                   <h1>React Clicky Game</h1>
                   <h1>Click an image to begin!</h1>
                   <h1>Score goes here</h1>
                   </div>
                </nav>
            </div>
        )
    }
}

export default Header 

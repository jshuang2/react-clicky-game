import React, { Component } from 'react';
import images from "../../images.json";
import Card from "../Card/Card";

class CardList extends Component {

    state = {
        images
      }

    render() {
        console.log(this.state.images);
        
        return (
            
            this.state.images.map((image) => (
            <Card image={image}/>
        ))
        
        )
    }
}

export default CardList

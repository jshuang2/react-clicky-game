import React, { Component } from 'react';
import images from "../../images.json";
import Card from "../Card/Card";

class CardList extends Component {

        state = {
            images,
            chosenImages: new Set()
          }
    

    // Function to listen for chosen image. If the image has not yet been selected, push it to a set called ChosenCards. If it has, then call the reset function    
    handleImageChoice = event => {

        console.log(event.target);
        
        // console.log("this is state...." + JSON.stringify(this.state.images))
        let chosenID = event.target.id;

        if (!this.state.chosenImages.has(chosenID)) {
            this.shuffle(this.state.images);

            this.setState((state) => ({
                images,
                chosenImages: state.chosenImages.add(chosenID)
              }));
        }
        else {
            this.resetGame();
        };
        
    };
    
    // Function to randomize and shuffle the images array after each chosen card
    shuffle = (imagesArray) => {
        for (let i = imagesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
        }

        console.log(imagesArray);
        return imagesArray;
    };


    // Function to reset the game. This will be called in another function.
    resetGame = () => {
        this.shuffle(this.state.images);

        this.setState({
            images,
            chosenImages: new Set()
        })

        alert("YOU LOST");
    };



    render() {
        console.log(this.state.images);
        
        
        
        return (
            
            this.state.images.map(image => (
            <Card 
                handler={this.handleImageChoice}
                key={image.id} 
                src={image.image}
                alt={image.name}
                id={image.id}
            />
            ))
        )
    }

}



export default CardList 

## React Game of Thrones Memory Game

A memory game created with React where the user wins by not clicking the same image twice. With a Game of Thrones theme!

View the deployed application at: <b><a href="https://game-of-thrones-memory.netlify.com/" target="_blank">https://game-of-thrones-memory.netlify.com/</a></b>


## How to play

1. Upon loading the app, users will see a randomized image board with each image being a character from the HBO series, Game of Thrones.

2. Click an image. Once an image is clicked, the board will shuffle randomly and display a new board with the same characters. 

3. The goal is to not click the same image twice. If you do, you lose! If you don't and manage to click each image only once, you win! The board will then reset and you may play again.

![Game of Thrones Memory](https://user-images.githubusercontent.com/52802240/77585321-84801d00-6ea1-11ea-8fff-4f86cd70f290.gif)

---

## Installation and Setup Instructions

#### Example:  

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000/`  

---

## Reflection

This was a week long project built during the final month of the University of Washington full stack web development bootcamp. Out of everything I've built up to this point, creating this app was one of my favorite experiences. As a gamer, I truly felt an appreciation for the function logic the game required.

One big learning experience I gained from building this was managing state. At this point, I'd never learned `Redux` or `Context API` yet so deciding where state would be stored was a tough but valuable learning curve. Another key takeaway was learning how to implement `Set` data structures. I used a set to store and check for previously clicked images. Since sets are exteremely efficient in that they only store unique values, it was the perfect choice for in this case.

At the end of the day, I learned a lot! In future iterations of this app, instead of displaying an alert box, I plan on creating a modal that pops up whenever a player loses or wins. In this modal, I'll store high score data as well as allow players to choose if they want to play again or not.

View the deployed application at: <b><a href="https://game-of-thrones-memory.netlify.com/" target="_blank">https://game-of-thrones-memory.netlify.com/</a></b>
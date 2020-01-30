import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import images from "./images.json";

class App extends Component {

  state = {
    images
  }


  render() {

    console.log(this.state.images);

    return (
      <div>
      <div className="fluid-container">
        <Header />
      </div>
      
      <h1>Hello World</h1>
      </div>
    );
  }
}


export default App;

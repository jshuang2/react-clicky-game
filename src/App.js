import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";


class App extends Component {
  
  state = {
    play: false
  }

  url = "https://ia800908.us.archive.org/12/items/tvtunes_20712/Game%20of%20Thrones.mp3";
  audio = new Audio(this.url);

  componentDidMount() {
    this.play()
  }

  play = () => {
    this.setState({ play: true })
      this.audio.play();
    }




  render() {

    return (
      <div>

      <div className="fluid-container">
        <Header />
      </div>

      <div className="container">
          
            <div className="card-columns">
              <CardList  />
            </div>
          
      </div>
      
      <div className="fluid-container">
        <Footer />
      </div>

      </div>
    );
  }
}


export default App;

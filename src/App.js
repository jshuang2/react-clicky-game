import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
import Footer from "./components/Footer/Footer";


class App extends Component {
  

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

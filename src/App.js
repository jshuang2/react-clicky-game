import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import CardList from "./components/CardList/CardList";


class App extends Component {


  render() {

    return (
      <div>
      <div className="fluid-container">
        <Header />
      </div>

      <div className="container">
      <div className="card-columns">
        <CardList />
      </div>
      </div>
      
      
      </div>
    );
  }
}


export default App;

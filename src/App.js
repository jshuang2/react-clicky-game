import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import CardList from "./components/CardList/CardList";
import Wrapper from "./components/Wrapper/Wrapper";


class App extends Component {


  render() {

    return (
      <div>
      <div className="fluid-container">
        <Header />
      </div>

      <div className="container">
          <Wrapper>
            <div className="card-columns">
              <CardList />
            </div>
          </Wrapper>
      </div>
      
      
      </div>
    );
  }
}


export default App;

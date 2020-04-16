import React, { Component, Fragment } from 'react';
import CardList from './components/CardList';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { robots } from "./robots";
import './App.css';

class App extends Component {
  
  render() {
    return (
      <Fragment>
        <Header />
        <div className="App">
          <CardList robots={robots} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import CardList from './components/CardList';
import { robots } from "./robots";
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <CardList robots={robots}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import CardList from './components/CardList';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import InputForm from "./components/shared/InputForm";
import { robots } from "./robots";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchTerm: ''
    }
  }

  inputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
        <div className="tc">
          <Header />
          <InputForm inputChange={this.inputChange}/>
          <CardList robots={robots} />  
          <Footer />
        </div>
    );
  }
}

export default App;

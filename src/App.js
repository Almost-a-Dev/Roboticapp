import React, { Component, Fragment } from 'react';
import CardList from './components/CardList';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import InputForm from "./components/shared/InputForm/InputForm";
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
      <Fragment>
        <Header />
        <InputForm inputChange={this.inputChange}/>
        <div className="App">
          <CardList robots={robots} />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;

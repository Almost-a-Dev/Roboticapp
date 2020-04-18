import React, { Component } from 'react';
import CardList from './components/CardList';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import InputForm from "./components/shared/InputForm";
import './App.css';
import ChildrenContainer from "./components/shared/ChildrenContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(r => r.json())
      .then(u => this.setState({ robots: u }));
  }

  inputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const filterR = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
      return (
        <div className="tc">
          <Header />
          <InputForm inputChange={this.inputChange} />
          <ChildrenContainer>
            <CardList robots={filterR} />
          </ChildrenContainer>
          <Footer />
        </div>
      );

  }
}

export default App;

import React, { Component } from 'react';
import Robot from "./components/Robot";
import { robots } from "./robots";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Robot id={robots[0].id} name={robots[0].name} email={robots[0].email} />;
      </div>
    );
  }
}

export default App;

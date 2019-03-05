import React, { Component } from 'react';
import './App.css';
import Menu from './components/menu';
import Trends from './pages/trends';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu></Menu>
        <Trends></Trends>
      </div>
    );
  }
}

export default App;

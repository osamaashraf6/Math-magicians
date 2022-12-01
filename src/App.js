import React, { Component } from 'react';
import Calculator from './components/calculator/calculator';
import './App.css';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <>
        <div className="App">powered By osama</div>
        <Calculator />
      </>
    );
  }
}

export default App;

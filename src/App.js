import React, { Component } from 'react';
import Header from './Header';
import SubHeader from './SubHeader';
import logo from './logo.svg';
import SausageLifestyle from './SausageLifestyle';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
          <div className="Sub-App-header">
            <SubHeader />
          </div>
        </div>

        <div className="SausageLifestyle">
          <SausageLifestyle />
          <h3>Every (Texan) man eats sausage. Not every man lives a sausage-lifestyle.</h3>
        </div>
      </div>
    );
  }
}

export default App;

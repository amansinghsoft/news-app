import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import DynamicNews from './components/DynamicNews';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News/>
        <DynamicNews/>
      </div>
    )
  }
}

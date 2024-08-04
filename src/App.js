import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 9;
  apiKey=process.env.REACT_APP_NEWS_API

  state ={
    progress:0
  }
  setProgress = (progress) => {
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color='#f11946'
            progress={this.state.progress}
          />
          {/*
        <News setProgress= \{this.setProgress\}  pageSize={this.pageSize} country ="in" category="Sports"/>
        */}
          <Switch>
            <Route exact path="/Business"><News setProgress= {this.setProgress}  apiKey={this.apiKey}  key="Business" pageSize={this.pageSize} country="in" category="Business" /></Route>
            <Route exact path="/Entertainment"><News setProgress= {this.setProgress}  apiKey={this.apiKey}  key="Entertainment" pageSize={this.pageSize} country="in" category="Entertainment" /></Route>
            <Route exact path="/General"><News setProgress= {this.setProgress}  apiKey={this.apiKey}  key="General" pageSize={this.pageSize} country="in" category="General" /></Route>
            <Route exact path="/Health"><News setProgress= {this.setProgress}  apiKey={this.apiKey}  key="Health" pageSize={this.pageSize} country="in" category="Health" /></Route>
            <Route exact path="/Science"><News setProgress= {this.setProgress}  apiKey={this.apiKey}  key="Science" pageSize={this.pageSize} country="in" category="Science" /></Route>
            <Route exact path="/Sports"><News setProgress= {this.setProgress}  apiKey={this.apiKey}  key="Sports" pageSize={this.pageSize} country="in" category="Sports" /></Route>
            <Route exact path="/Technology"><News setProgress= {this.setProgress}  apiKey={this.apiKey}  key="Technology" pageSize={this.pageSize} country="in" category="Technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

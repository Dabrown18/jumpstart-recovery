import React, { Component } from 'react';
import Header           from './components/Header'
import Carousel         from './components/Carousel';
import HowItWorks       from './components/HowItWorks';
import BackOnTrack      from './components/BackOnTrack';
import BuiltFromScience from './components/BuiltFromScience';
import SignUp from './components/SignUp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <Carousel />
         <HowItWorks />
         <BackOnTrack/>
         <BuiltFromScience/>
         <SignUp/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  } from 'react-router-dom';

import './index.css';

import Container1 from './Container1';
import CatList from './data/cats';
import DogList from './data/dogs';
import ComputerList from './data/computers';


 class App extends Component {
    
  render() { 
        
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ ()=> <Container1 data={CatList}/>} />
            <Route path="/cat" render={ ()=> <Container1 data={CatList} title={"Cats"} /> } />
            <Route path="/dog" render={ ()=> <Container1 data={DogList} title={"Dogs"} />} />
            <Route path="/computer" render={ ()=> <Container1 data={ComputerList} title={"Computers"} />} />
          </Switch>
      </BrowserRouter >
    );
  }
}

export default App

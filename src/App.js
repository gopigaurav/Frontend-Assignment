import React, { useEffect, useState} from 'react';
import './App.css';
import Cards from './Cards';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Details from './Details';
import { DataProvider } from './DataProvider';


function App() {

  return (
    <DataProvider>
    <div className="app">
      <Router>
        <Switch>
         <Route path="/profile/:id">
          <Details/>
        </Route>
         <Route path="/">
          <Cards/>
         </Route>
      </Switch>
    </Router>
    </div>
    </DataProvider>
  );
}

export default App;

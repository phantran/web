import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResumeContainer from './components/routing/ResumeContainer';
import DefaultContainer from './components/routing/DefaultContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/resume" component={ResumeContainer} />
        <Route component={DefaultContainer} />
      </Switch>
    </Router>
  );
}

export default App;

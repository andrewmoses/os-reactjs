import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import feeds from './components/feeds.js';
import NotFound from './notfound.js';
import fullpost from './components/fullpost.js';

const Router = () => (
  <div>
    <p>This is to demonstrate the layout functionality of reactjs</p>
    <h1>Everything is awesome when jenkins is kickced</h1>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component= {feeds} />
        <Route exact path="/rj/:postid" component= {fullpost} />
        <Route component= {NotFound} />
      </Switch>
    </BrowserRouter>
    <p>towards the end of the page</p>
  </div>
);

ReactDOM.render(<Router />, document.getElementById('root'));

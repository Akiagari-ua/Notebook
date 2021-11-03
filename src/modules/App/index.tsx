import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
console.log('asd');
const App = () => (
  <Router>
    <Link to="/">Home</Link>
    <Link to="/page">Page</Link>
    <Link to="/about">About</Link>

    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route path="/page">
        <div>Page</div>
      </Route>
      <Route path="/about">
        <div>About1</div>
      </Route>
    </Switch>
  </Router>
);

export default App;

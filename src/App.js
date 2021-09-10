import React from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Cart from './pages/Cart';
import NavMenu from './pages/NavMenu';

function App() {
  return (
    <>
      <Router>
      <NavMenu/>
        <Route exact path="/">
          <Menu/>
        </Route>
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

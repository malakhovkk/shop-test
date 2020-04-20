import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.sass';
import Home from './containers/Home';
import CategoryComponent from './containers/CategoryComponent';
import CartComponent from './containers/CartComponent';
import {connect} from 'react-redux';

import {
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter,
  useHistory,
  useLocation,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path='/category' component={CategoryComponent}/>
          <Route exact path='/cart' component={CartComponent}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;

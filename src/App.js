import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Switch as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import Product from './component/Product';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Default from './component/Default';
import Cart from './component/Cart';

class App extends Component {
  render() {
    return(
  <React.Fragment>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={ProductList}></Route>
      <Route path="/details" component={Details}></Route>
      <Route path="/cart" component={Cart}></Route>
      <Route path="/product" component={Product}></Route>
      <Route component={Default}></Route>
    </Switch>
  </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from './component/header/Header';
import Login from './component/Login/Login';
import ProductList from './component/ProductList/ProductList';
import ProductDetail from './component/ProductDetail/ProductDetail';
import CartManager from './component/CartManager/CartManager';
import CheckOut from './component/CheckOut/CheckOut'
import Logout from './component/Logout/Logout';
import ConfirmOrderPage from './component/ConfirmOrderPage/ConfirmOrderPage';
import MyOrders from './component/MyOrders/MyOrders';
import OrderDetails from './component/OrderDetails/OrderDetails';
import history from './history';

import {
  Router,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {

  constructor(){
    super();
    this.state = {
      isAuth : false,
      username : "admin",
      password : "admin"
    }
  }

  handleSubmit = (e,item) => {
    e.preventDefault();
    const {username, password} = this.state;

    if(item.username === username && item.password === password){
      this.setState({
        isAuth : true
      })
    }
    else{
      this.setState({
        isAuth : false
      })
    }
  }

  changeAuth = () => {
    this.setState({
      isAuth : !this.state.isAuth
    })
    console.log(this.state);
  }

  render() {
    return (
        <Router history = {history}>
        <Header auth={this.state.isAuth}/>
        <Route
          exact 
          path = "/"
          render = { () => <p className="opening-message">Welcome to Winery Shopping Cart</p>}
        />
        <Route
          path="/login"
          component = {() => (
                          <Login 
                            handleSubmit = {this.handleSubmit}
                            isAuth = {this.state.isAuth}
                            />
                      )}
        />
        
        <PrivateComponent
          path="/productsList"
          isAuth = {this.state.isAuth}
          component = {ProductList}
        />
        <PrivateComponent
          path="/product-detail"
          isAuth={this.state.isAuth}
          component={ProductDetail}
        />
        <PrivateComponent
          path="/orderDetails"
          isAuth={this.state.isAuth}
          component={OrderDetails}
        />
        <PrivateComponent
          path="/myOrders"
          isAuth={this.state.isAuth}
          component={MyOrders}
        />
        <PrivateComponent
          path="/cart"
          isAuth={this.state.isAuth}
          component={CartManager}
        />
        <PrivateComponent
          path="/checkout"
          isAuth={this.state.isAuth}
          component={CheckOut}
        />
        <PrivateComponent
          path="/confirmOrder"
          isAuth={this.state.isAuth}
          component={ConfirmOrderPage}
        />

        <Route
          path='/logout'
          component = {() => (
            <Logout 
              changeAuth = {this.changeAuth}
              isAuth = {this.state.isAuth}
            />
        )} />

        </Router>
    );
  }
}

export default App;

const PrivateComponent = ({
  component: Component,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: isAuth
            }}
          />
        )
      }
    />
  );
};


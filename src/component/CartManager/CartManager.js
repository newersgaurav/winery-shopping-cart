import React, { Component } from 'react';
import { connect } from  'react-redux';
import CartOptions from '../CartOptions/CartOptions';
import CartTable from '../CartTable/CartTable';
import { Link } from 'react-router-dom';
import emptyCart from '../../empty-cart.png';
import './CartManager.css';

class CartManager extends Component{
    
    constructor(){
        super();
        this.state = {
            showUpdateOption : false
        }
    }

    changeUpdateOption = () => {
        this.setState({
            showUpdateOption : !this.state.showUpdateOption
        })
    }

    render(){
        return(
                    <div className="main-cart-container">
                        <div className="cart-wrapper"> 
                        { this.props.cartItems.length > 0 ?
                            <div>
                                <h2>Your Shopping Cart</h2>
                                <table>
                                    <tr>
                                        <th>ITEM</th>
                                        <th>SIZE</th>
                                        <th>COLOR</th>
                                        <th>QUANTITY</th>
                                        <th colSpan="2">PRICE</th>
                                    </tr>
                                    <tbody>
                                        {this.props.cartItems.map( item => {
                                            return(
                                                <CartTable product={item} showUpdateOption={this.state.showUpdateOption}/>
                                            )
                                        })}
                                    </tbody>
                                </table>
                                <CartOptions 
                                    changeUpdateOption={this.changeUpdateOption}
                                    showUpdateOption={this.state.showUpdateOption}
                                />
                            </div> : 
                            <div className="empty-cart">
                                <h3>Your Cart Is Empty</h3>
                                <img alt="empty-cart" src={emptyCart}></img>
                                <Link className="links" to="/productsList">Continue Shopping</Link>
                            </div>
                        }
                        </div>
                    </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems : state.cartReducer.cartItems,
    }
}

export default connect( mapStateToProps, null )(CartManager);
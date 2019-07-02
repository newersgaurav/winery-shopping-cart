import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import { emptyCart } from '../../Reducer/Actions/cartActions';
import './CartOptions.css';

class CartOptions extends Component{
    render(){
        const { changeUpdateOption , showUpdateOption } = this.props;
        return(
            <div className="cart-options">
                {showUpdateOption ? 
                    <a className="links" onClick={changeUpdateOption}>Confirm Update</a> 
                    : <a className="links" onClick={changeUpdateOption}>Update Cart</a> 
                }
                
                <a className="links" onClick={this.props.emptyCart}>Empty Cart</a>
                <Link className="links" to="/productsList">Continue Shopping</Link>
                <Link className="links" to="/checkout">Go To Checkout</Link>
            </div>
        )
    }
}

const mapDispatchToProps = {
    emptyCart,
}

export default connect( null , mapDispatchToProps )(CartOptions);
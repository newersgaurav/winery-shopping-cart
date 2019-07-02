import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import './ConfirmOrderPage.css';

class ConfirmOrderPage extends Component{
    render(){
        const { 
            orders , 
            images } = this.props;
        return(
            <div className="order-confirmed-wrapper">
                <h2 className="confirmation-message">Order Confirmed</h2>
                <div className="order-info">
                        <div class="products">
                            <h3>Products Ordered</h3>
                            { 
                                orders[orders.length - 1].items.map(item => {
                                return(
                                    <div class="product-items">
                                        <img class="product-items-image" src={images[0][item.defaultColor]}></img>
                                        <div class="product-items-details">
                                            <p>Name : {item.productname}</p>
                                            <p>Size : {item.size}</p>
                                            <p>Color : {item.defaultColor}</p>
                                            <p>Quantity : {item.quantity}</p>
                                        </div>
                                    </div>
                                )
                            })}
                            
                        </div>
                        <div className="product-billing">
                            <h3>Order Information</h3>
                            <div className="shipping-block">
                                <h5>Shipping Address</h5>
                                <p className="name">{orders[orders.length - 1].bill.shippingAddress.name}</p>
                                <p className="email">{orders[orders.length - 1].bill.shippingAddress.email}</p>
                                <p className="address">{orders[orders.length - 1].bill.shippingAddress.address}</p>
                                <p className="city">{orders[orders.length - 1].bill.shippingAddress.city}</p>
                                <p className="zipcode">{orders[orders.length - 1].bill.shippingAddress.zipcode}</p>
                                <p className="contact">{orders[orders.length - 1].bill.shippingAddress.contact}</p>
                            </div>
                            <div className="billing-block">
                                <h5>Billing Address</h5>
                                <p className="name">{orders[orders.length - 1].bill.billingAddress.name}</p>
                                <p className="email">{orders[orders.length - 1].bill.billingAddress.email}</p>
                                <p className="address">{orders[orders.length - 1].bill.billingAddress.address}</p>
                                <p className="city">{orders[orders.length - 1].bill.billingAddress.city}</p>
                                <p className="zipcode">{orders[orders.length - 1].bill.billingAddress.zipcode}</p>
                                <p className="contact">{orders[orders.length - 1].bill.billingAddress.contact}</p>
                            </div>
                            <div className="bill-block">
                                <h5>Amount Detail</h5>
                                <p>Total Cost : &#8377; {orders[orders.length - 1].bill.amountDetails.totalCost}</p>
                                <p>Discount : &#8377; {orders[orders.length - 1].bill.amountDetails.discount}</p>
                                <p>Shipping : &#8377; {orders[orders.length - 1].bill.amountDetails.shipping}</p>
                                <p>Promocode : {orders[orders.length - 1].bill.amountDetails.promocode}</p>
                                <p>Amount To Pay : &#8377; {orders[orders.length - 1].bill.amountDetails.amountToPay}</p>
                            </div>
                        </div>
                </div>
                <div>
                    <h2 className="thanks-message">THANK YOU FOR SHOPPING</h2>
                    <div className="continue-shopping-btn">
                        <Link className="continue-shopping" to="/productsList">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        images : state.showProductReducer.data.images,
        orders : state.cartReducer.orders,
    }
}

export default connect( mapStateToProps, null )(ConfirmOrderPage);
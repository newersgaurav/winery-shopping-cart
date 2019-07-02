import React, { Component } from 'react';
import './OrderDetails.css';

function OrderDetails(props){
    const { ele ,images } = props.location.state;
    return(
        <div className="order-details-wrapper">
                <h2 className="order-details-heading">Order Details</h2>
                <div className="order-info">
                        <div class="products">
                            <h3>Products Ordered</h3>
                            { 
                                ele.items.map(item => {
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
                                <p className="name">{ele.bill.shippingAddress.name}</p>
                                <p className="email">{ele.bill.shippingAddress.email}</p>
                                <p className="address">{ele.bill.shippingAddress.address}</p>
                                <p className="city">{ele.bill.shippingAddress.city}</p>
                                <p className="zipcode">{ele.bill.shippingAddress.zipcode}</p>
                                <p className="contact">{ele.bill.shippingAddress.contact}</p>
                            </div>
                            <div className="billing-block">
                                <h5>Billing Address</h5>
                                <p className="name">{ele.bill.billingAddress.name}</p>
                                <p className="email">{ele.bill.billingAddress.email}</p>
                                <p className="address">{ele.bill.billingAddress.address}</p>
                                <p className="city">{ele.bill.billingAddress.city}</p>
                                <p className="zipcode">{ele.bill.billingAddress.zipcode}</p>
                                <p className="contact">{ele.bill.billingAddress.contact}</p>
                            </div>
                            <div className="bill-block">
                                <h5>Amount Detail</h5>
                                <p>Total Cost : &#8377; {ele.bill.amountDetails.totalCost}</p>
                                <p>Discount : &#8377; {ele.bill.amountDetails.discount}</p>
                                <p>Shipping : &#8377; {ele.bill.amountDetails.shipping}</p>
                                <p>Promocode : {ele.bill.amountDetails.promocode}</p>
                                <p>Amount To Pay : &#8377; {ele.bill.amountDetails.amountToPay}</p>
                            </div>
                        </div>
                </div>
            </div>
    )
}

export default OrderDetails;
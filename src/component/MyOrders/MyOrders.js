import React, { Component } from 'react';
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import './MyOrders.css';
import emptyCart from '../../empty-cart.png';

class MyOrders extends Component{
    render(){
        const { orders , images } = this.props;
        return(
            <div className="order-main-container">
                <h2>My Orders</h2>
                { orders.length > 0 ? 
                    <div className="orders">
                        {orders.map(ele => {
                            const date = ele.timeOfOrder;
                            const displayDate = date.getDay() + "/" + date.getMonth() +"/" + date.getYear() + " " + date.getHours() + " : " + date.getMinutes();
                            return(
                                <Link class="orderDetailsLink" to={{pathname:`/orderDetails` , state : {ele,images}}} >
                                    <div className="order-card">
                                        <p>Number Of Items : {ele.items.length}</p>
                                        <p>Amount To Pay : &#8377;{ele.bill.amountDetails.amountToPay}</p>
                                        <p>Payment Mode : Cash On Delivery</p>
                                        <p>Time of Order : {displayDate}</p>
                                        <p>Status : Shipped</p>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    : <div className="no-order">
                        <h2>No Orders Yet</h2>
                        <img alt="No Order" src={emptyCart}></img>
                        <div className="submit">
                            <Link className="cart-buttons" to="/productsList">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders : state.cartReducer.orders,
        images : state.showProductReducer.data.images,
    }
}

export default connect( mapStateToProps, null )(MyOrders);
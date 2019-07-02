import React , { Component } from 'react';
import { connect } from  'react-redux';
import history from '../../history';
import CheckoutTable from '../CheckoutTable/CheckoutTable';
import { addAddress , addAmountDetails , addOrders , emptyCart } from '../../Reducer/Actions/cartActions'
import {Link} from 'react-router-dom';
import $ from 'jquery';
import './CheckOut.css';

class CheckOut extends Component{

    constructor(){
        super();
        this.state = {
            promocode : "",
            shipping_charges : 40,
        }
    }


    sameAddress = () => {
        if (document.getElementById("same").checked && 
        document.getElementById("billing-name").value != "" &&
        document.getElementById("billing-email").value != "" &&
        document.getElementById("billing-city").value != "" &&
        document.getElementById("billing-address").value != "" &&
        document.getElementById("billing-zipcode").value != "" &&
        document.getElementById("billing-contact").value != "" ) {
          document.getElementById("shipping-name").value = document.getElementById(
            "billing-name"
          ).value;
          document.getElementById("shipping-email").value = document.getElementById(
            "billing-email"
          ).value;
          document.getElementById("shipping-city").value = document.getElementById(
            "billing-city"
          ).value;
          document.getElementById("shipping-address").value = document.getElementById(
            "billing-address"
          ).value;
          document.getElementById("shipping-zipcode").value = document.getElementById(
            "billing-zipcode"
          ).value;
          document.getElementById("shipping-contact").value = document.getElementById(
            "billing-contact"
          ).value;
        } 
        else {
          document.getElementById("shipping-name").value = "";
          document.getElementById("shipping-email").value = "";
          document.getElementById("shipping-address").value = "";
          document.getElementById("shipping-zipcode").value = "";
          document.getElementById("shipping-contact").value = "";
          document.getElementById("shipping-city").value = "";
          alert("Kindly fill all the required field");
          document.getElementById("same").checked = false;

        }
      };

    getTotal = () => {
        let total = 0;
        this.props.cartItems.forEach(ele => {
            total = total + (ele.quantity*ele.price);
        });
        return total;
    }

    amountToPay = () => {
        let amount = 0;
        let total = this.getTotal();
        if(this.state.promocode === "SHOP20"){
            amount = (total - (total * 0.2)) + this.state.shipping_charges;
        }
        else{
            amount = total + this.state.shipping_charges;
        }
        return amount;
    }

    discount = (amount , total) => {
        let dis = 0;
        dis = total - (amount - this.state.shipping_charges);
        return dis;
    }

    onsubmit = () => {
        let val = document.getElementById("promocodeValue").value;
        this.setState({
            promocode : val
        })
    }

    confirmOrder = (e) => {
        e.preventDefault();
        let billing_address = {
            "name" : document.getElementById("billing-name").value,
            "email" : document.getElementById("billing-email").value,
            "address" : document.getElementById("billing-address").value,
            "zipcode" : document.getElementById("billing-zipcode").value,
            "contact" : document.getElementById("billing-contact").value,
            "city" : document.getElementById("billing-city").value,
        }
        let shipping_address = {
            "name" : document.getElementById("shipping-name").value,
            "email" : document.getElementById("shipping-email").value,
            "address" : document.getElementById("shipping-address").value,
            "zipcode" : document.getElementById("shipping-zipcode").value,
            "contact" : document.getElementById("shipping-contact").value,
            "city" : document.getElementById("shipping-city").value,
        }
        const orderDetails = {
            items : this.props.cartItems,
            timeOfOrder : new Date(),
            bill : {
                billingAddress : billing_address,
                shippingAddress : shipping_address,
                amountDetails : {
                    totalCost : this.getTotal(),
                    amountToPay : this.amountToPay(),
                    discount : this.discount(this.amountToPay() , this.getTotal()),
                    promocode : this.state.promocode,
                    shipping : this.state.shipping_charges
                }
            }
        }
        if($("input[type='text']").val() !== "" || $("input[type='email']").val() !== ""){
            this.props.addOrders( orderDetails );
            this.props.emptyCart();
            history.push("./confirmOrder");
        }
        else{
            alert("Fill All The Required Field");
        }
    }

    render(){
        return(
            <div className="main-checkout-container">
                <div className="checkout-wrapper">
                    <h2>Checkout Details</h2>
                    <CheckoutTable/>
                    <div className="bill">
                        <div className="bill-menu">
                            <p>Total Cost : </p>
                            <p>&#8377; {this.getTotal()}</p>
                        </div>
                        <div className="bill-menu">
                            <p>Shipping Charges : </p>
                            <p>&#8377; {this.state.shipping_charges}</p>
                        </div>
                        <div className="bill-menu">
                            <p>Discount : </p>
                            <p>&#8377; {this.discount( this.amountToPay() , this.getTotal() )}</p>
                        </div>
                        <div className="bill-menu">
                            <label>Promocode : </label>
                            <input type="text" id="promocodeValue"/>
                            <input type="submit" onClick={this.onsubmit}/>
                        </div>
                        <div className="bill-menu">
                            <p className="amount-to-pay">Amount To Pay : </p>
                            <p className="amount-to-pay">&#8377; {this.amountToPay()}</p>
                        </div>
                    </div>
                    <h2>Your Details</h2>
                    <form className="checkout-form">
                        <div className="billing-address">
                            <div className="heading">
                                BILLING ADDRESS
                            </div>
                            <div className="input-field">
                                <label>Name</label>
                                <input type="text" className="name-field" id="billing-name" required />
                            </div>
                            <div className="input-field">
                                <label>Email</label>
                                <input type="email" className="email-field" id="billing-email" required />
                            </div>
                            <div className="input-field">
                                <label>City</label>
                                <input type="text" className="city-field" id="billing-city" required />
                            </div>
                            <div className="input-field">
                                <label>Address</label>
                                <input type="text" className="address-field" id="billing-address" required />
                            </div>
                            <div className="input-field">
                                <label>Zipcode</label>
                                <input type="text" className="zipcode-field" id="billing-zipcode" maxLength="6" required />
                            </div>
                            <div className="input-field">
                                <label>Contact</label>
                                <input type="text" className="contact-field" id="billing-contact" maxLength="10" required 
                                    onChange = {this.validate}/>
                            </div>
                        </div>

                        <div className="same-as-shipping-checkbox">
                            <input
                            type="checkbox"
                            className="sameAsCheckbox"
                            id="same"
                            onClick={this.sameAddress}
                            />
                            Same as Billing
                        </div>

                        <div className="shipping-address">
                        <div className="heading">
                                SHIPPING ADDRESS
                            </div>
                            <div className="input-field">
                                <label>Name</label>
                                <input type="text" className="name-field" id="shipping-name" required />
                            </div>
                            <div className="input-field">
                                <label>Email</label>
                                <input type="email" className="email-field" id="shipping-email" required />
                            </div>
                            <div className="input-field">
                                <label>City</label>
                                <input type="text" className="city-field" id="shipping-city" required />
                            </div>
                            <div className="input-field">
                                <label>Address</label>
                                <input type="text" className="address-field" id="shipping-address" required />
                            </div>
                            <div className="input-field">
                                <label>Zipcode</label>
                                <input type="text" className="zipcode-field" id="shipping-zipcode" maxLength="6" required />
                            </div>
                            <div className="input-field">
                                <label>Contact</label>
                                <input type="text" className="contact-field" id="shipping-contact" maxLength="10" required />
                            </div>
                        </div>
                        <div className="submit">
                            <input type="submit" className="cart-buttons" value="Confirm Order" onClick={this.confirmOrder}/>
                        </div>
                    </form>
                    <div className="submit">
                        <Link className="cart-buttons" to="/productsList">
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
        cartItems : state.cartReducer.cartItems,
    }
}

const mapDispatchToProps = {
    addAddress,
    addAmountDetails,
    addOrders,
    emptyCart,
}

export default connect( mapStateToProps , mapDispatchToProps)(CheckOut);

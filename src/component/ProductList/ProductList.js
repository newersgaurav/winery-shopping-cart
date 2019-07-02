import React, { Component } from 'react';
import { connect } from  'react-redux';
import ProductCard from '../../component/ProductCard/ProductCard';
import './ProductList.css';
import { Link } from 'react-router-dom';
import cartImage from '../../cart.svg';
import { deleteProduct } from '../../Reducer/Actions/cartActions';
import $ from 'jquery';


class ProductList extends Component{
    constructor(){
        super();
        this.state = {
            showCartdetails : false
        }
    }

    onCartHoverIn = () => {
        if(this.props.cartItems.length > 0){
            this.setState({
                showCartdetails : true
            })
        }
    }

    onCartHoverOut = () => {
        this.setState({
            showCartdetails : false
        })
    }

    addToCartNotification = () => {
        $(".notify").toggleClass("active");
        $("#notifyType").toggleClass("success");
        
        setTimeout(function(){
          $(".notify").removeClass("active");
          $("#notifyType").removeClass("success");
        },2000);
    }

    
    render(){
        const { images , thumb } = this.props.productDetails;
        const { cartItems } = this.props;
        

        return(
            <div className="main-container">
                <div className="wrapper">
                    <div className="heading">
                        <h2 className="product-list-heading">Product List</h2>
                        <div className="cart-container"
                            onMouseEnter={this.onCartHoverIn}
                            onMouseLeave={this.onCartHoverOut}
                        >
                            <Link className="link" to="/cart">
                                <img className="cart-image" src={cartImage} alt="cart"></img>
                                <div className="batch">{cartItems.length}</div>
                            </Link>
                            {this.state.showCartdetails ? 
                                    <div className="cart-details-card">
                                        {cartItems.map(item => {
                                            return(
                                                <div id={"box-shadow-"+item.defaultColor} class="item-rows">
                                                    <img class="product-image" src={images[0][item.defaultColor]}></img>
                                                    <div class="details">
                                                        <p>Name : {item.productname}</p>
                                                        <p>Size : {item.size}</p>
                                                        <p>Color : {item.defaultColor}</p>
                                                        <p>Quantity : {item.quantity}</p>
                                                        <i className="fas fa-times delete-item"
                                                        onClick={ ()=>{this.props.deleteProduct({id:item.key,color:item.defaultColor,size:item.size},event)}}
                                                        />
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    : null
                                }
                        </div>
                    </div>
                    
                    <div className="product-list">
                    {
                        thumb.map(product => {
                            return(
                                    <ProductCard
                                        img={images}
                                        product={product}
                                        id={product.key}
                                        notify={this.addToCartNotification}
                                    />
                            )
                        })
                    }
                    </div>
                </div>
                <div className="notify">
                    <span id="notifyType" className=""></span>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        productDetails: state.showProductReducer.data,
        cartItems : state.cartReducer.cartItems,
    }
}

const mapDispatchToProps = {
    deleteProduct,
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductList);





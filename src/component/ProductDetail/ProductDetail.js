import React, { Component } from 'react';
import './ProductDetail.css';

function ProductDetail(props){
        const { product , img } = props.location.state;
        return(
            <div className="wrapper-product-details">
                <h1>Product Details</h1>
                <div className="product-details">
                    <img src={img[0][product.defaultColor]} alt={product.alt}></img>
                    <div className="details">
                        <h3>Name : {product.productname}</h3>
                        <h3>Price : {product.price}</h3>
                        <h3>Color : {product.defaultColor}</h3>
                        <h3>Size : {product.size}</h3>
                        <h3>Category : {product.category}</h3> 
                    </div>
                </div>
            </div>
        )
}

export default ProductDetail;
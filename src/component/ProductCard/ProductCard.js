import React, { Component } from 'react';
import './ProductCard.css';
import ProductOption from '../ProductOption/ProductOption';
import { Link } from 'react-router-dom';

class ProductCard extends Component{
    constructor(){
        super();
        this.state = {
          display : false,
        }
    }

    showOptions = (e) => {
        this.setState(
            {
                display: true
            }
        )
    }
    hideOptions = (e) =>{
        this.setState({
            display: false
        })
    }

    render(){
        const { product , img , id , notify } = this.props;
        return(
                <div key={ id } className="card" onMouseEnter={this.showOptions} onMouseLeave={this.hideOptions}>
                    <div id={"box-shadow-"+product.defaultColor} className="image-container">
                        <Link className="link" to={{pathname:`product-detail/${id}/${product.productname}`  , state : {product,img}}}>
                            <img alt={product.alt} src={img[0][product.defaultColor]}></img>
                        </Link>
                        {this.state.display ?   <ProductOption product={product} color={ product.defaultColor } id = { id } notify = { notify }/> : null}
                    
                    </div>
                    <div className="product-details">
                        <p className="name">{product.productname}</p>
                        <p className="price">&#8377;{product.price}</p>
                    </div>
                </div>
            
        )
    }
}

export default ProductCard;
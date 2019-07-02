import React, { Component } from 'react';
import ColorList from '../ColorList/ColorList';
import { connect } from  'react-redux';
import { addToCart , changeSize } from '../../Reducer/Actions/cartActions';
import './ProductOption.css';
import $ from 'jquery';

class ProductOption extends Component{
    constructor(){
        super();
        this.state = {
            displayColorList : false
        }
    }

    componentDidMount = () => {
        let size = this.props.product.size;
        $("#"+size).prop("selected",true);
    }

    showColorList = (e) => {
        this.setState({
            displayColorList : true
        })
    }

    hideColorList = (e) => {
        this.setState({
            displayColorList : false
        })
    }

    handleChange = (e) => {
        const changedSize = e.target.value;
        this.props.changeSize({id : this.props.product.key , size : changedSize });
    }

    cartAdd = () => {
        this.props.addToCart({...this.props.product});
        this.props.notify();
    }

    render(){
        return(
            <div className="options">
                <div className="select-color" onMouseEnter={this.showColorList} onMouseLeave={this.hideColorList}>
                    <div id={ this.props.color }></div>
                    {this.state.displayColorList ? <ColorList hideList={this.hideColorList} id = { this.props.id }/> : null }
                </div>
                <select onChange={this.handleChange}>
                    <option id="Small">Small</option>
                    <option id="Medium">Medium</option>
                    <option id="Large">Large</option>
                </select>
                <button onClick={this.cartAdd}>Add To Cart</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addToCart,
    changeSize,
}

export default connect( null , mapDispatchToProps )(ProductOption);
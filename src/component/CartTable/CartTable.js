import React , { Component } from 'react';
import { connect } from  'react-redux';
import { increaseQuantity , 
        decreaseQuantity , 
        deleteProduct , 
        changeColor , 
        sizeChange } from '../../Reducer/Actions/cartActions';
import $ from 'jquery';

class CartTable extends Component{

    handleColorChange = (e) =>{
        const changeColor = e.target.value;
        this.props.changeColor({id: this.props.product.key, 
            color: this.props.product.defaultColor , 
            size: this.props.product.size,
            changedColor : changeColor})
    }

    handleSizeChange = (e) =>{
        const changeSize = e.target.value;
        this.props.sizeChange({id: this.props.product.key, 
            color: this.props.product.defaultColor , 
            size: this.props.product.size,
            changedSize : changeSize})
    }

    componentDidMount = () => {
        let size = this.props.product.size;
        let color = this.props.product.defaultColor;
        $("#"+size).prop("selected",true);
        $("#"+color).prop("selected",true);
    }



    render(){
        const {
            productname,
            size,
            defaultColor,
            quantity,
            price,
            key,
        } = this.props.product;
        const showUpdateOption = this.props.showUpdateOption;
        return(
            <tr>
                <td>{productname}</td>
                <td>{showUpdateOption ? (
                    <select onChange={this.handleSizeChange}>
                        <option id="Small">Small</option>
                        <option id="Medium">Medium</option>
                        <option id="Large">Large</option>
                    </select>
                ): size}</td>
                <td>{showUpdateOption ? (
                    <select onChange={this.handleColorChange}>
                        <option id="Red">Red</option>
                        <option id="Blue">Blue</option>
                        <option id="Yellow">Yellow</option>
                    </select>
                ): defaultColor}</td>
                <td>
                {showUpdateOption ? (
                    <i
                        onClick={ ()=>{this.props.decreaseQuantity({id:key,color:defaultColor,size:size})} } 
                        className="icon fas fa-minus-circle"
                    />
                ) : null}
                {quantity}
                {showUpdateOption ? (
                    <i
                        onClick={ ()=>{this.props.increaseQuantity({id:key,color:defaultColor,size:size})} }
                        className="icon fas fa-plus-circle"
                    />
                ) : null}
                </td>
                <td>{price * quantity}</td>
                {showUpdateOption ? (
                <td>
                    <button
                    onClick={ ()=>{this.props.deleteProduct({id:key,color:defaultColor,size:size})}}
                    className="delete-icon"
                    >
                    <i className="fas fa-times" />
                    </button>
                </td>
                ) : null}
            </tr>
        )
    }
}

const mapDispatchToProps = {
    increaseQuantity,
    decreaseQuantity,
    deleteProduct,
    changeColor,
    sizeChange,
}

export default connect( null , mapDispatchToProps )(CartTable);
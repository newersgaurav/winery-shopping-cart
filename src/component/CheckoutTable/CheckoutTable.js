import React , { Component } from 'react';
import { connect } from  'react-redux';

class CheckoutTable extends Component{
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <th>ITEM</th>
                        <th>SIZE</th>
                        <th>COLOR</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                    </tr>
                    <tbody>
                        {this.props.cartItems.map( item => {
                            return(
                                <tr>
                                    <td>{item.productname}</td>
                                    <td>{item.size}</td>
                                    <td>{item.defaultColor}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price * item.quantity}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cartItems : state.cartReducer.cartItems,
    }
}

export default connect( mapStateToProps, null )(CheckoutTable);
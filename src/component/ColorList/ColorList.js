import React, { Component } from 'react';
import './ColorList.css';
import { changeColor } from './ColorListAction';
import { connect } from 'react-redux';

class ColorList extends Component{
    render(){
        return(
            <ul>
                <li onClick = {()=>{this.props.changeColor({ id: this.props.id,
                color : "Red"})}}><span className="Red"></span></li>
                <li onClick = {()=>{this.props.changeColor({ id: this.props.id,
                color : "Blue"})}}><span className="Blue"></span></li>
                <li onClick = {()=>{this.props.changeColor({ id: this.props.id,
                color : "Yellow"})}}><span className="Yellow"></span></li>
            </ul>
        )
    }
}

const mapDispatchToProps = {
    changeColor,
}

export default connect( null , mapDispatchToProps )(ColorList);
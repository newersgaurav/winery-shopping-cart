import React, { Component } from 'react';
import '../header/headerStyle.css';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <div className="header">
                <h1>MEGA MART</h1>
                <div>
                    <Link className="link" to="/myOrders">Orders</Link>
                    {
						this.props.auth ? <Link className="link" to="/logout">Logout</Link> : <Link className="link" to="/login">Login</Link>
					}
                </div>
            </div>
        );
    }
}

export default Header;
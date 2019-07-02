import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './Login.css';

class Login extends Component{

	constructor(){
		super();
		this.state = {
			username : "admin",
			password : "admin"
		}
	}

	handleChange = (e) => {
		this.setState({
			...this.state,
			[e.target.name] : e.target.value
		})
	}

	render(){

		const { isAuth , handleSubmit } = this.props;

		if(isAuth){
			return <Redirect to="/productsList" />
		}

		return(
			<div>
				<form className="login" onSubmit = {(e) => handleSubmit(e, this.state)}>
					<h2 className="login-heading">LOGIN</h2>
					<input
						type="text"
						onChange = {this.handleChange}
						name="username"
						placeholder = "username"
						value = {this.state.username}
					/>
					<input
						type="password"
						onChange = {this.handleChange}
						name="password"
						placeholder = "password"
						value = {this.state.password}
					/>
					<input type="submit" value="LOGIN"/>
				</form>
			</div>
		)
	}
}

export default Login;
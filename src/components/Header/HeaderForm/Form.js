import React, { Component } from 'react';

export default class Form extends Component {
	render() {
		return (
			<form action="" className="form">
				<input type="email" placeholder="Your email address"/>
				<button className="email_btn">Inquire</button>
			</form>
		)
	}
}
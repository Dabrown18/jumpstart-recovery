import React from 'react';
import './HowItWorks.css';

const ZipCode       = require('../../img/zip-code.png');
const Text          = require('../../img/text.png');
const Deposited     = require('../../img/deposited.png');
const GirlCartwheel = require('../../img/girl-cartwell.png');

const HowItWorks = () => (
	<div className="how-it-works">
		<div className="how-bg">
			<div className="how-content">
				<h2 className="primary">How Jumpstart works</h2>
				<h2 className="secondary">Simple and uncomplicated</h2>
				<div className="iphone_container_item">
					<img src={ZipCode}   alt="Zip Code"  className="iphone"/>
					<div className="item_info">
						<h3 className="iphone_title_h3">Sign up today</h3>
						<p className="iphone_title_p">
							Based on insured location, your premium can be less than two coffees per week.
						</p>
					</div>
				</div>
				<div className="iphone_container_item">
					<img src={Text}      alt="Text"      className="iphone"/>
					<div className="item_info">
						<h3 className="iphone_title_h3">If an intense quake affects you</h3>
						<p className="iphone_title_p">
							You get a text message from Jumpstart. Reply to confirm you'll have expenses.
						</p>
					</div>
				</div>
				<div className="iphone_container_item">
					<img src={Deposited} alt="Deposited" className="iphone"/>
					<div className="item_info">
						<h3 className="iphone_title_h3">Payment complete</h3>
						<p className="iphone_title_p">
							Payment is directly deposited to your bank account.
						</p>
					</div>
				</div>
				<p>No deductible</p>
				<p>No paperwork</p>
				<p>No hassle</p>
				<button className="signup_btn">Sign Up</button>
			</div>
		</div>
		<div className="jump-bg">
			<img src={GirlCartwheel} alt="Girl doing a cartwheel" className="cartwheel-bg"/>
			<h3 className="top-left">Hello There</h3>
		</div>
	</div>
);

export default HowItWorks;
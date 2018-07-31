import React from 'react';
import "./Footer.css";

const Logo = require("../../img/jumpstart-recovery-black.png");

const Footer = () => (
	<div className="footer-bg">
		<div className="footer-container">
			<div className="logo-container">
				<img
					src={Logo}
					alt="Jumpstart Recovery Logo"
					className="footer-logo"
				/>
			</div>
			<div className="list-container">
				<div className="list">
					<div className="contact">
						<div className="list-heading">
							Contact
						</div>
						<ul>
							<li>
								344 Thomas L Berkley Way<br/>
								Oakland, CA 94612<br/>
								info@jumpstartrecovery.com<br/>
								510-891-1753
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
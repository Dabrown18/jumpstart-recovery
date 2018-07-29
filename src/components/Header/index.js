import React from 'react';
import HeaderForm from './HeaderForm';
import './Header.css';

const logoBlack = require('../../img/jumpstart-recovery-black.png');

const Header = () => (
	<div className="bg-foreground">
		<div className="content">
			<img src={logoBlack} alt="Jumpstart Logo" className="logo-black"/>
			<h1 className="page-title">Bounce back from an earthquake</h1>
			<h2 className="page-subtitle">
				With simple quake insurance to recover from life’s disruption.
			</h2>
		</div>
		<HeaderForm />
	</div>
);

export default Header;
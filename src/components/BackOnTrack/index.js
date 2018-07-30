import React from 'react';
import './BackOnTrack.css';

const IndianGuy = require('../../img/indian-guy.png');

const BackOnTrack = () => (
	<div className="back-on-track-container">
		<h2>Back on track.</h2>
		<p>You’re a resourceful person. Don’t get your life disrupted for too long. Speed up your recovery with Jumpstart.</p>
		<div className="people-container">
			<div className="foreground">
				<div className="background-1">
				</div>
				<img
					src={IndianGuy}
					alt="Male Testimonial"
					className="male-testimonial"
				/>
			</div>
			<div className="foreground">
				<div className="background-2">
					<img src="" alt=""/>
					Hello
				</div>
			</div>
		</div>
	</div>
);

export default BackOnTrack;
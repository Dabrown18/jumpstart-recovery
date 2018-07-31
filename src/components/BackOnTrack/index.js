import React from 'react';
import './BackOnTrack.css';

const IndianGuy  = require('../../img/indian-guy.png');
const FreeLancer = require('../../img/free-lancer.png');
const Quotes     = require("../../img/quotes.png");

const BackOnTrack = () => (
	<div className="back-on-track-container">
		<h2>Back on track.</h2>
		<p className="back-on-track-container-p">You’re a resourceful person. Don’t get your life disrupted for too long. Speed up your recovery with Jumpstart.</p>
		<div className="people-container">
			<div className="foreground">
				<div className="background-1">
				</div>
				<img
					src={IndianGuy}
					alt="Male Testimonial"
					className="testimonial-img"
				/>
			</div>
			<div className="foreground">
				<div className="background-2">
				</div>
				<img
					src={FreeLancer}
					alt="Female Free Lancer"
					className="testimonial-img"
				/>
			</div>
		</div>
		<div className="text">
			<div className="foreground">
				<img
					src={Quotes}
					alt="Quote"
					className="icon"
				/>
				<p className="quote-text">
					Never anticipated the expenses from the 2014 quake, none of them covered by
					regular insurance.
				</p>
				<p className="quote-source">Engineer in South Napa</p>
			</div>
			<div className="foreground">
				<img
					src={Quotes}
					alt="Quote"
					className="icon"
				/>
				<p className="quote-text">
					As a freelancer and part-time AirBnB host, I could lose weeks of income
					when a quake hits.
				</p>
				<p className="quote-source">Designer in San Francisco</p>
			</div>
		</div>
	</div>
);

export default BackOnTrack;
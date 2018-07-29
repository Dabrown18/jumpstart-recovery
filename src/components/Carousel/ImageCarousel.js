import React, { Component } from 'react';
import Slider from "react-slick";

const AccessDenied    = require('../../img/access-denied.png');
const VehicleDamage   = require('../../img/vehicle-damage.png');
const BrokenComputer  = require('../../img/broken-computer.png');
const DataLost        = require('../../img/data-lost.png');
const BusinessClosed  = require('../../img/business-closed.png');
const BridgeDamage    = require('../../img/bridge-damage.png');
const GarageBreakdown = require('../../img/garage-breakdown.png');
const MissedFlight    = require('../../img/missed-flight.png');
const HouseFire       = require('../../img/house-fire.png');
const CommuteRisk     = require('../../img/commute-risk.png');
const BrokenPhone     = require('../../img/broken-phone.png');
const Daycare         = require('../../img/daycare.png');


export default class ImageCarousel extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			speed: 2000,
			autoplaySpeed: 2000,
			cssEase: "linear"
		};

		return (
			<Slider {...settings}>
				<div>
					<img
						src={AccessDenied}
						alt="Access Denied"
						className="image"
					/>
				</div>
				<div>
					<img
						src={VehicleDamage}
						alt="Vehicle Damage"
						className="image"
					/>
				</div>
				<div>
					<img
						src={BrokenComputer}
						alt="Broken Computer"
						className="image"
					/>
				</div>
				<div>
					<img
						src={DataLost}
						alt="Data Lost"
						className="image"
					/>
				</div>
				<div>
					<img src={BusinessClosed}
						  alt="Business Closed"
						  className="image"
					/>
				</div>
				<div>
					<img
						src={BridgeDamage}
						alt="Bridge Damage"
						className="image"
					/>
				</div>
				<div>
					<img
						src={GarageBreakdown}
						alt="Garage Breakdown"
						className="image"
					/>
				</div>
				<div>
					<img
						src={MissedFlight}
						alt="Missed Flight"
						className="image"
					/>
				</div>
				<div>
					<img
						src={HouseFire}
						alt="House Fire"
						className="image"
					/>
				</div>
				<div>
					<img
						src={CommuteRisk}
						alt="Commute Risk"
						className="image"
					/>
				</div>
				<div>
					<img
						src={BrokenPhone}
						alt="Broken Phone"
						className="image"
					/>
				</div>
				<div>
					<img
						src={Daycare}
						alt="Daycare"
						className="image"
					/>
				</div>
			</Slider>
		)
	}
}
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
			dots: false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			pauseOnHover: true
		};

		return (
			<div className="image_container">
				<Slider {...settings}>
					<div className="image_container">
						<img
							src={AccessDenied}
							alt="Access Denied"
							className="image"
						/>
						<p>Access Denied</p>
					</div>
					<div className="image_container">
						<img
							src={VehicleDamage}
							alt="Vehicle Damage"
							className="image"
						/>
						<p>Vehicle damage</p>
					</div>
					<div className="image_container">
						<img
							src={BrokenComputer}
							alt="Broken Computer"
							className="image"
						/>
						<p>Broken computer</p>
					</div>
					<div className="image_container">
						<img
							src={DataLost}
							alt="Data Lost"
							className="image"
						/>
						<p>Data lost</p>
					</div>
					<div className="image_container">
						<img src={BusinessClosed}
							  alt="Business Closed"
							  className="image"
						/>
						<p>Business closed</p>
					</div>
					<div className="image_container">
						<img
							src={BridgeDamage}
							alt="Bridge Damage"
							className="image"
						/>
						<p>Bridge damage</p>
					</div>
					<div className="image_container">
						<img
							src={GarageBreakdown}
							alt="Garage Breakdown"
							className="image"
						/>
						<p>Garage breakdown</p>
					</div>
					<div className="image_container">
						<img
							src={MissedFlight}
							alt="Missed Flight"
							className="image"
						/>
						<p>Missed flight</p>
					</div>
					<div className="image_container">
						<img
							src={HouseFire}
							alt="House Fire"
							className="image"
						/>
						<p>Fire due to quake</p>
					</div>
					<div className="image_container">
						<img
							src={CommuteRisk}
							alt="Commute Risk"
							className="image"
						/>
						<p>Commute risk</p>
					</div>
					<div className="image_container">
						<img
							src={BrokenPhone}
							alt="Broken Phone"
							className="image"
						/>
						<p>Broken phone</p>
					</div>
					<div className="image_container">
						<img
							src={Daycare}
							alt="Daycare"
							className="image"
						/>
						<p>Daycare cancelled</p>
					</div>
				</Slider>
			</div>

		)
	}
}
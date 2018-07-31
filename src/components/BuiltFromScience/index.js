import React from 'react';
import './BuiltFromScience.css';

const Heart = require("../../img/heart.png");
const USGS  = require("../../img/usgs-data.png");
const Kate  = require("../../img/kate-stillwell.png");
const BCorp = require("../../img/b-corp.png");

const BuiltFromScience = () => (
	<div className="credibility">
		<div className="built-from-science">
			<h2>
				Built from science, made with
				<img src={Heart} alt="heart" className="heart"/>
			</h2>
			<div className="experts">
				<div className="experts_container">
					<div className="container_item">
						<img
							src={USGS}
							alt="USGS Corp"
							className="illust"
						/>
						<div className="expert_info">
							<h3>Powered by data</h3>
							<p>
								Powered by USGS data, Jumpstart makes a “parametric” earthquake insurance
								available to everyone. Your eligibility to receive payment is determined
								by the quake intensity at your insured location, with a simple claims
								process.
							</p>
						</div>
					</div>
					<div className="container_item">
						<img
							src={Kate}
							alt="Ceo Kate Stillwell"
							className="illust"
						/>
						<div className="expert_info">
							<h3>Created by experts</h3>
							<p>
								Kate is the former president of Structural Engineers Association of
								Northern California and longtime fellow at the Earthquake Engineering
								Research Institute. She’s devoted to making our communities resilient to
								disasters.
							</p>
						</div>
					</div>
					<div className="container_item">
						<img
							src={BCorp}
							alt="B-Corp"
							className="illust"
						/>
						<div className="expert_info">
							<h3>Designed for impact</h3>
							<p>
								Jumpstart is a Benefit Corporation. It’s our legal obligation to help
								society increase financial resilience against disasters. Jumpstart’s
								innovative model gets more recovery money to people when you actually need
								it.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

);

export default BuiltFromScience;
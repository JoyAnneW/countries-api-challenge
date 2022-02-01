import React from "react";
import { relevantData } from "../API";

export default function Card(props) {
	return relevantData.map((country) => {
		console.log(country);
		return (
			<div className="card">
				<img src={country.flag} alt="country flag" />
				<div className="card--text">
					<h1 className="card--title">{country.countryName}</h1>
					<ul className="card--details">
						<li>
							<span>Population: </span> {country.population}
						</li>
						<li>
							<span>Region: </span>
							{country.region}
						</li>
						<li>
							<span>Capital: </span>
							{country.capital}
						</li>
					</ul>
				</div>
			</div>
		);
	});
}

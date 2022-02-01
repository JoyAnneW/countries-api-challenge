import React from "react";

export default function Card({ countryName }) {
	return (
		<div className="card">
			<img src="" alt="country flag" />
			<div className="card--text">
				<h1 className="card--title">{countryName}</h1>
				<ul className="card--details">
					<li>
						<span>Population:</span>
					</li>
					<li>
						<span>Region:</span>
					</li>
					<li>
						<span>Capital:</span>{" "}
					</li>
				</ul>
			</div>
		</div>
	);
}

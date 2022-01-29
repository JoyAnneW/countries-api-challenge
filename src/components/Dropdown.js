import React from "react";
import { AiOutlineDown } from "react-icons/ai";
export const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
//for now putting regions outside of function until I do the API call
//destructuring props as a parameter.
export default function Dropdown({ regions }) {
	const region = regions.map((region) => (
		<div className="option">{region}</div>
	));
	return (
		<div className="dropdown">
			<div className="control">
				<div className="selected-value">Filter by Region</div>
				<div className="arrow">
					{" "}
					<AiOutlineDown className="dropdown--icon" />
				</div>
			</div>
			<div className="options">{region} </div>
		</div>
	);
}

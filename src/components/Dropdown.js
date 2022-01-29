import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
export const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
//for now putting regions outside of function until I do the API call
//destructuring props as a parameter.

// this component can be made more generic so that it can be used in different contexts outside of this project

export default function Dropdown({ regions, value, onChange }) {
	// we need to use state to track whether the Dropdown is open or not

	const [open, setOpen] = useState(false);

	const region = regions.map((region) => (
		<div className="option">{region}</div>
	));

	return (
		<div className="dropdown">
			<div
				className="control"
				onClick={() => setOpen((prevState) => !prevState)}
			>
				<div className="selected-value">Filter by Region</div>
				<div className={`arrow ${open ? "open" : null}`}>
					<AiOutlineDown className="dropdown--icon" />
				</div>
			</div>
			<div className={`options ${open ? "open" : null}`}>{region}</div>
		</div>
	);
}

import React, { useState, useRef, useEffect } from "react";
import { AiOutlineDown } from "react-icons/ai";
export const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
//for now putting regions outside of function until I do the API call
//destructuring props as a parameter.

// this component can be made more generic so that it can be used in different contexts outside of this project

export default function Dropdown({ regions, value, onChange }) {
	// we need to use state to track whether the Dropdown is open or not

	const [open, setOpen] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		document.addEventListener("click", close);
		return () => document.removeEventListener("click", close);
	}, []);

	function close(event) {
		// console.dir(event.target, ref.current);
		setOpen(event && event.target === ref.current);
	}

	const region = regions.map((region) => (
		<div
			className={`option ${value === region ? "selected" : null}`}
			onClick={() => {
				onChange(region);
				setOpen(false);
			}}
		>
			{region}
		</div>
	));

	return (
		<div className="dropdown">
			<div
				className="control"
				onClick={() => setOpen((prevState) => !prevState)}
			>
				<div className="selected-value" ref={ref}>
					{value ? value : "Filter by Region"}
				</div>
				<div className={`arrow ${open ? "open" : null}`}>
					<AiOutlineDown className="dropdown--icon" />
				</div>
			</div>
			<div className={`options ${open ? "open" : null}`}>{region}</div>
		</div>
	);
}

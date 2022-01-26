import React from "react";
import { AiOutlineSearch, AiOutlineDown } from "react-icons/ai";

export default function SearchFilter() {
	return (
		<>
			<form action="" className="form">
				<div className="search">
					<AiOutlineSearch className="search--icon" />
					<input
						className="search--input"
						type="search"
						placeholder="Search for a country..."
					/>
				</div>
			</form>
			<div className="dropdown--container">
				<label htmlFor="regions"></label>
				<select name="regions" id="regions" className="dropdown--options">
					<option value="">Filter by Region</option>

					<option value="Africa">Africa</option>
					<option value="America">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
				<AiOutlineDown className="dropdown--icon" />
			</div>
		</>
	);
}

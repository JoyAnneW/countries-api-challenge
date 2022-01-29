import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

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
		</>
	);
}

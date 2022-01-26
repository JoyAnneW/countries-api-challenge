import React from "react";
import { BsMoon } from "react-icons/bs";

export default function Header() {
	return (
		<header>
			<h1 className="header--main-heading">Where in the world?</h1>
			<div className="header__theme-toggler">
				<BsMoon />
				<span>Dark/Light Mode</span>
			</div>
		</header>
	);
}

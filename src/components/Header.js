import React from "react";
import { IoMoonOutline } from "react-icons/io5";

export default function Header() {
	return (
		<header>
			<h1 className="header--main-heading">Where in the world?</h1>
			<div className="header__theme-toggler">
				<IoMoonOutline />
				<span>Dark/Light Mode</span>
			</div>
		</header>
	);
}

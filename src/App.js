import React from "react";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import Dropdown from "./components/Dropdown";
import { regions } from "./components/Dropdown";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<SearchFilter menuPlacement="bottom" />
				{/* style expects a js object. this will constrain the dropdown to a certain width */}
				<div style={{ width: "50%" }}>
					<Dropdown regions={regions} />
					{console.log(regions)}
				</div>
			</main>
		</div>
	);
}

export default App;

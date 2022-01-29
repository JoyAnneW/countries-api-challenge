import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { regions } from "./components/Dropdown";

function App() {
	// setting state to keep track of the values in the dropdown.
	const [value, setValue] = useState(null);
	return (
		<div className="App">
			<Header />
			<main>
				<Search />

				{/* style expects a js object. this will constrain the dropdown to a certain width */}
				<div style={{ width: "50%" }}>
					<Dropdown
						regions={regions}
						value={value}
						onChange={(val) => setValue(val)}
					/>
					{console.log(regions)}
				</div>
			</main>
		</div>
	);
}

export default App;

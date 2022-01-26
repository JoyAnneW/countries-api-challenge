import React from "react";
import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<SearchFilter menuPlacement="bottom" />
			</main>
		</div>
	);
}

export default App;

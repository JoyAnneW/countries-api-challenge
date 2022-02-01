import FetchWrapper from "./FetchWrapper";
let relevantData = [];

const API = new FetchWrapper("https://restcountries.com/v2");
API.get("/all").then((data) => {
	console.log(data);

	relevantData = data.map((country) => {
		const population = new Intl.NumberFormat().format(country.population);
		return {
			countryName: country.name,
			flag: country.flag,
			region: country.region,
			capital: country.capital,
			population: population,
		};
	});
});

console.log(relevantData);
export { relevantData };

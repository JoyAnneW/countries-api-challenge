import FetchWrapper from "./FetchWrapper";
let relevantData = [];
const API = new FetchWrapper("https://restcountries.com/v2");
API.get("/all").then((data) => {
	console.log(data);
	relevantData = data.map((country) => {
		return {
			countryName: country.name,
			flag: country.flag,
			region: country.region,
			capital: country.capital,
		};
	});
});

console.log(relevantData);
export { relevantData };

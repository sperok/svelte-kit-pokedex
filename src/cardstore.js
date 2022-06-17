import { writable } from 'svelte/store';
export const tabs = writable({});
const cardDetails = {};
let loaded = false;
let myTabs = {}

export const fetchCards = async () => {
	console.log("fetchCards:" + loaded + " " + Object.keys(myTabs));
	if (loaded) return;
	const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedCards = data.results.map(makeTab);
	tabs.set(myTabs);
	//console.log("Fetched Cards: " + loadedCards.length + " Tabs: " + Object.keys(myTabs));
	//console.log(myTabs)
	loaded = true;
};

function makeTab(data, index) {
	const key = data.name.substring(0,1).toLowerCase()
	if (! myTabs[key]) myTabs[key] = []
	myTabs[key].push( {
		name: data.name,
		id: index + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
	})
}	

export const getCardsById = async (id) => {
	if (cardDetails[id]) return cardDetails[id];

	try {
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data = await res.json();
		cardDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
};

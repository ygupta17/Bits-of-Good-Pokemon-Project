const searchBar = document.getElementById("searchbar");
console.log(searchBar);
const baseUrl = "https://pokeapi.co/api/v2/"

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value;
    
})

const loadPokemon = async () => {
    try {
        const res = await fetch(baseUrl);
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};
// Example call to the Pokedex API
/**fetch('https://pokeapi.co/api/v2/pokemon/ditto')
	.then(response => {
		return response.json()
	})
	.then(responseAsJson => {
		console.log(responseAsJson)
	})
	.catch(error => {
		console.error(error)
	})*/
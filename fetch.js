import fetch from "node-fetch";
const baseURL = "https://pokeapi.co/api/v2/"

// URL to get information about Bulbasaur is https://pokeapi.co/api/v2/pokemon/bulbasaur

// fetch() with .then() chain
fetch(`${baseURL}pokemon/bulbasaur`)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err)
  })

// Async Await fetch
const allData = async() => {
try {
  const response = await fetch(`${baseURL}pokemon/bulbasaur`)
  const data = await response.json()
  console.log(data)
} catch (e) {
  console.log(e)
}
}
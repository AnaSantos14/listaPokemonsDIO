const pokeApi = {}

pokeApi.getPokemonsToLi = (pokemons) ={
    return .fetch (pokemons.url).then((response) = response.json())
}

pokeApi.getPokemons = function(offset = 0, limit= 10){
    const url = "https://pokeapi.co/api/v2/pokemon?offset=$(offset)&limit=$(limit)"
    return fetch(url)
    .then (response) = response.json()
    .then (jsonBody)= jsonBody.results
    .fetch('https://pokeapi.co/api/v2/pokemon/1/'),
    .fetch('https://pokeapi.co/api/v2/pokemon/2/'),
    .fetch('https://pokeapi.co/api/v2/pokemon/3/'),
    .fetch('https://pokeapi.co/api/v2/pokemon/4/'),

}

pokemonList.url(

).then(results)={
    console.log(results)
}
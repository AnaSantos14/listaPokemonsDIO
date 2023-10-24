
const offset = 0
const limit = 10
const url = "https://pokeapi.co/api/v2/pokemon?offset=$(offset)&limit=$(limit)"

function convertPokemonToLi(pokemons){
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then(pokemons=[]={
        pokemonList.innerHTML+=pokemons.map(convertPokemonToLi).json('')
    })
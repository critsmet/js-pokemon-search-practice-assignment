document.addEventListener('DOMContentLoaded', () => {

  const searchBar = document.getElementById("pokemon-search-input")
  const pokemonContainer = document.getElementById("pokemon-container")

  function makePokemonCard(pokemon) {
    return `<div className="pokemon-card">
              <p>${pokemon.name}</p>
              <img id=${pokemon.name + "-sprite"} src=${pokemon.sprites.front}>
             </div>`
  }

  function loadPokemonToDOM() {
    let filteredPokemon = POKEMON.filter(pokemon => pokemon.name.includes(searchBar.value))
    let formattedPokemon = filteredPokemon.map(pokemon => makePokemonCard(pokemon))
    pokemonContainer.innerHTML = `${formattedPokemon.join("")}`
  }

  searchBar.addEventListener("input", (e => loadPokemonToDOM()))

  loadPokemonToDOM()
})

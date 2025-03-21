import './App.css';
import Container from './Container';
import { useState, useEffect } from 'react';

function App() {

  const[pokemonList, setPokemonList] = useState([]);
  const [pokemons, setPokemons] = useState([]); 

  const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPokemonList(data.results))
  }, [])

  useEffect(() => {
    const fetchPokemonData = async () => {
      const batchSize = 100;
      const fetchedPokemons = [];
  
      for (let i = 0; i < pokemonList.length; i += batchSize) {
        const batch = pokemonList.slice(i, i + batchSize);
        const batchData = await Promise.all(
          batch.map(pokemon =>
            fetch(pokemon.url)
              .then(response => response.json())
              .catch(error => {
                console.error(`Error fetching ${pokemon.name}:`, error);
                return null;
              })
          )
        );
        fetchedPokemons.push(...batchData.filter(pokemon => pokemon !== null));
      }
      setPokemons(fetchedPokemons);
    };
  
    if (pokemonList.length > 0) {
      fetchPokemonData();
    }
  }, [pokemonList]);

  return (
    <>
      <div>
        <h1>Alice's PokéDex</h1>
        <Container pokemons={pokemons} />
      </div>
    </>
  )
}

export default App


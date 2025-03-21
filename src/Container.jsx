function Card({ pokemon }) {
    return (
      <div className="pokemon">
        <p className="id">#{pokemon.id.toString().padStart(3, '0')}</p>
        <p className="name">{capitalizeFirstLetter(pokemon.name)}</p>
        <p>Height: {(pokemon.height / 10).toFixed(1)} m</p>
        <p>Weight: {(pokemon.weight / 10).toFixed(1)} kg</p>
        <img 
          src={pokemon.sprites.front_default} 
          alt={pokemon.name} 
        />
      </div>
    );
  }
  
export function Container({ pokemons }) {
    return (
      <div className="container">
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    );
  }

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default Container
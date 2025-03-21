function Card({pokemon}){
    return (<>
        <div className="poke-card">
            #{pokemon.id}: {pokemon.name}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
    </>)
}

function Container({ pokemons }){

    return (
        <div>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    )
}

export default Container;
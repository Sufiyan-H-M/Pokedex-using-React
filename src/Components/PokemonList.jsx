import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonUrl }) => {
  const [pokeData, setPokeData] = useState(null);

  async function fetchPokemonInfo(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPokeData(data);
    } catch (error) {
      console.error("Failed to get Pokemon:", error);
    }
  }

  useEffect(() => {
    fetchPokemonInfo(pokemonUrl);
  }, [pokemonUrl]);

  if (!pokeData) {
    return (
      <>
        <h1>Data is loading...</h1>
      </>
    );
  } else {
    if (pokeData.types[1]?.type?.name) {
      return (
        <>
          <PokemonCard
            id={pokeData.id}
            name={pokeData.name}
            sprite={pokeData.sprites.front_default}
            type={pokeData.types[0].type.name}
            type2={
              pokeData.types[1].type.name ? pokeData.types[1].type.name : ""
            }
          />
        </>
      );
    } else {
      return (
        <>
          <PokemonCard
            id={pokeData.id}
            name={pokeData.name}
            sprite={pokeData.sprites.front_default}
            type={pokeData.types[0].type.name}
          />
        </>
      );
    }
  }
};

export default PokemonList;

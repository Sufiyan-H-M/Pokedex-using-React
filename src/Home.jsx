import React, { useState, useEffect } from 'react'
import Nav from './Components/Nav'
import PokemonList from './Components/PokemonList'
import './App.css'

const Home = () => {
  const [search, setSearch] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await response.json();
        setAllPokemon(data.results);
      } catch(error) {
        console.error("Failed to fetch Pokemon list:", error);
      }
    };
    
    fetchAllPokemon();
  }, []);

  const filteredPokemon = allPokemon.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Nav search={search} setSearch={setSearch}/>

      <div className='pokemon-grid'>
        {
          filteredPokemon.map((pokemon) => {
            return <PokemonList key={pokemon.name} pokemonUrl={pokemon.url}/>
          })
        }
      </div>
    </div>
  )
}

export default Home

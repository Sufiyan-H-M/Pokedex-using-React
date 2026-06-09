import React from 'react'
import Nav from './Components/Nav'
import PokemonCard from './Components/PokemonCard'
import PokemonList from './Components/PokemonList'

const App = () => {
  const pokemonIds = [];
  for(let i = 1; i <= 151; i++){
    pokemonIds.push(i);
  }
  console.log(pokemonIds);

  return (
    <div>
        <Nav/>
        <div className='pokemon-grid'>
          {
              pokemonIds.map((id)=>{
                return <PokemonList key={id} pokeID={id}/>
      
                })
          }
        </div>
        
    </div>
  )
}

export default App
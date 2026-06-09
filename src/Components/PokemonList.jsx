import React, { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard';

const PokemonList = ({pokeID}) => {

    const [pokeData, setPokeData] = useState(null);

    let name = "";
    async function fetchPokemonInfo(id) {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
            const data = await response.json();
            console.log(data);
            setPokeData(data);
            console.log(data.name)
            name = data.name;
        } catch(error){
            console.error("Failed to get Pokemon:", error);
        }
        
    };

    useEffect(()=>{
        fetchPokemonInfo(pokeID);
    }, []);

    if(!pokeData){
        return (
            <>
                <h1>Data is loading...</h1>
            </>
        )
    } else {
        if(pokeData.types[1]?.type?.name){
            return (
            <>
                <PokemonCard id={pokeData.id} name={pokeData.name} sprite={pokeData.sprites.front_default} type={pokeData.types[0].type.name} type2={pokeData.types[1].type.name?pokeData.types[1].type.name:""}/> 
            </>
        )
        } else {
            return (
            <>
                <PokemonCard id={pokeData.id} name={pokeData.name} sprite={pokeData.sprites.front_default} type={pokeData.types[0].type.name}/> 
            </>
                )
        }
        
    }
  
}

export default PokemonList
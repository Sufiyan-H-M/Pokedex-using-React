import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './PokemonDetails.css'
import { useNavigate } from 'react-router-dom'
import Type from './Type'

const PokemonDetails = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [pokeData, setPokeData] = useState(null);

    useEffect(()=>{
        const fetchPokeData = async (id) => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokeData(data);
            console.log(data);
        } catch(error) {
        console.error("Failed to fetch Pokemon data:", error);
      }
    }

    fetchPokeData(id);

    }, []);

    function backToHome(){
        navigate('/');
    }


  if (!pokeData) {
    return (
      <>
        <h1>Data is loading...</h1>
      </>
    );
  }else{
        return (
    <>
    <div className='name-and-id'>
                <button className='back-btn' onClick={backToHome}>back</button>
                <p className='id'>{pokeData.id}. </p>
                <h1 className='name'>{pokeData.name}</h1>
    </div>

    <div className='pokeInfo-container'>
            
            <img className="pokeImage" src={pokeData.sprites.front_default}/>

            <div className='pokeInfo'>
                <div className='types'>{
                    pokeData.types.map(index => {
                        return <Type key={index.id} type={index.type.name}/>
                    })
                }</div>
                <br></br>
                <p>Abilities: {pokeData.abilities.map(slot => slot.ability.name).join(', ')}</p>
                <p>Base XP: {pokeData.base_experience}</p>
                <br></br>
                <h3>Stats</h3>
                <p>HP: {pokeData.stats[0].base_stat}</p>
                <p>Attack: {pokeData.stats[1].base_stat}</p>
                <p>Defense: {pokeData.stats[2].base_stat}</p>
                <p>Special-attack: {pokeData.stats[3].base_stat}</p>
                <p>Special-defense: {pokeData.stats[4].base_stat}</p>
                <p>Speed: {pokeData.stats[5].base_stat}</p>
            </div>
            <div className='moves-list'>
                <h3>Moves</h3>
                <br></br>
                <p>{
                    pokeData.moves.map(index => {
                        return <div><p>{index.move.name}</p><br></br></div>
                    } )
                }</p>
            </div>
    </div>
    </>
  )
  }
  
}

export default PokemonDetails
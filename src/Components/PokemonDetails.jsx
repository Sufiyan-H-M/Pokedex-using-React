import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './PokemonDetails.css'
import { useNavigate } from 'react-router-dom'
import Type from './Type'
import { hgToKg, dmToM } from '../ValueConverter'

const PokemonDetails = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const [pokeData, setPokeData] = useState(null);

    const [pokeImage,setPokeImage] = useState(null);
    const [toggleImage, setToggleImage] = useState("Back");
    const [toggleImageShiny, setToggleShiny] = useState("Shiny");

    useEffect(()=>{
        const fetchPokeData = async (id) => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const data = await response.json();
            setPokeData(data);

            setPokeImage(data.sprites.front_default);
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

function showBack() {
    if (pokeImage === pokeData.sprites.front_default) {
        setPokeImage(pokeData.sprites.back_default);
        setToggleImage("Front");
    } else {
        setPokeImage(pokeData.sprites.front_default);
        setToggleImage("Back");
    }
}

function showShiny() {
    // FIX: Check if it is currently a shiny front image
    if (pokeImage === pokeData.sprites.front_shiny) {
        setPokeImage(pokeData.sprites.back_shiny);
        setToggleShiny("Front Shiny");
    } else {
        setPokeImage(pokeData.sprites.front_shiny);
        setToggleShiny("Back Shiny");
    }
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
         <div className='pokeInfoCard'>

            <img className="pokeImage" src={pokeImage}/>

            <div className='pokeInfo'>
                <div className='types'>{
                    pokeData.types.map(index => {
                        return <Type key={index.id} type={index.type.name}/>
                    })
                }</div>
                <br></br>
                <p>Abilities: {pokeData.abilities.map(slot => slot.ability.name).join(', ')}</p>
                <p>Base XP: {pokeData.base_experience}</p>
             
                <h3>Stats</h3>
                <p>HP:              {pokeData.stats[0].base_stat}</p>
                <p>Attack:          {pokeData.stats[1].base_stat}</p>
                <p>Defense:         {pokeData.stats[2].base_stat}</p>
                <p>Special-attack:  {pokeData.stats[3].base_stat}</p>
                <p>Special-defense: {pokeData.stats[4].base_stat}</p>
                <p>Speed: {pokeData.stats[5].base_stat}</p>
              
                <p>Height: {dmToM(pokeData.height)} m</p>
                <p>Weight {hgToKg(pokeData.weight)} kg</p>
              
                <h3>Other Images</h3>
                <button className="ToggleImage" onClick={showBack}>{toggleImage}</button>
                <button className="ToggleImage" onClick={showShiny}>{toggleImageShiny}</button>
              
                <h3>Pokemon Sound</h3>
                <audio src={pokeData.cries.latest} controls></audio>
            </div>
            <div className='moves-list'>
                <h3>Moves</h3>
                <br></br>
                <div className='list'>{
                    pokeData.moves.map(index => {
                        return <><p>{index.move.name}</p><br></br></>
                    } )
                }</div>
            </div>
         </div>
    </div>
    </>
  )
  }
  
}

export default PokemonDetails
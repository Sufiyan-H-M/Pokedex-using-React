import React from 'react'
import "./PokemonCard.css"
import logo from "../assets/react.svg" 

const PokemonCard = ({name, sprite, id, type}) => {
  return (
    <div className='card'>
        <h3 class="PID">{id}</h3>
        <img src={sprite} alt=""></img>
        <h3>{name?name:"guest"}</h3>
        <h5>{type}</h5>
    </div>
  )
}
 
export default PokemonCard
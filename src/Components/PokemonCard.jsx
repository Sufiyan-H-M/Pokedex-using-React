import React from 'react'
import "./PokemonCard.css"
import logo from "../assets/react.svg" 
import Type from './Type'

const PokemonCard = ({name, sprite, id, type, type2}) => {
  return (
    <div className='card'>
        <h3 class="PID">{id}</h3>
        <img src={sprite} alt=""></img>
        <h3>{name?name:"guest"}</h3>
        <Type type={type}/>
        <Type type={type2}/>
    </div>
  )
}
 
export default PokemonCard
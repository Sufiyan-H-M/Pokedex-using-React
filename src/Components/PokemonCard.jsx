import React from 'react'
import "./PokemonCard.css"
import logo from "../assets/react.svg" 
import Type from './Type'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({name, sprite, id, type, type2}) => {

  const navigate = useNavigate();

  function showInfo(){
    navigate(`/pokemon/${id}`);
  }

  return (
    <div className='card' onClick={showInfo}>
        <h3 class="PID">{id}</h3>
        <img src={sprite} alt=""></img>
        <h3>{name?name:"guest"}</h3>
        <div className='types'>
          <Type type={type}/>
          <Type type={type2}/>
        </div>
    </div> 
  )
}
 
export default PokemonCard
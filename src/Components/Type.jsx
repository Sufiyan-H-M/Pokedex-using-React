import React from 'react'
import './Type.css'

const Type = ({ type , type2}) => {
    switch (type) {
        case "fire":
            return <div className="fire">Fire</div>

        case "water":
            return <div className="water">Water</div>

        case "grass":
            return <div className="grass">Grass</div>

        case "electric":
            return <div className="electric">Electric</div>

        case "ice":
            return <div className="ice">Ice</div>

        case "fighting":
            return <div className="fighting">Fighting</div>

        case "poison":
            return <div className="poison">Poison</div>

        case "ground":
            return <div className="ground">Ground</div>

        case "flying":
            return <div className="flying">Flying</div>

        case "psychic":
            return <div className="psychic">Psychic</div>

        case "bug":
            return <div className="bug">Bug</div>

        case "rock":
            return <div className="rock">Rock</div>

        case "ghost":
            return <div className="ghost">Ghost</div>

        case "dragon":
            return <div className="dragon">Dragon</div>

        case "dark":
            return <div className="dark">Dark</div>

        case "steel":
            return <div className="steel">Steel</div>

        case "fairy":
            return <div className="fairy">Fairy</div>
        
        case "normal":
            return <div className="normal">Normal</div>

        default:
            return null
    }

    switch (type2) {
        case "fire":
            return <div className="fire">Fire</div>

        case "water":
            return <div className="water">Water</div>

        case "grass":
            return <div className="grass">Grass</div>

        case "electric":
            return <div className="electric">Electric</div>

        case "ice":
            return <div className="ice">Ice</div>

        case "fighting":
            return <div className="fighting">Fighting</div>

        case "poison":
            return <div className="poison">Poison</div>

        case "ground":
            return <div className="ground">Ground</div>

        case "flying":
            return <div className="flying">Flying</div>

        case "psychic":
            return <div className="psychic">Psychic</div>

        case "bug":
            return <div className="bug">Bug</div>

        case "rock":
            return <div className="rock">Rock</div>

        case "ghost":
            return <div className="ghost">Ghost</div>

        case "dragon":
            return <div className="dragon">Dragon</div>

        case "dark":
            return <div className="dark">Dark</div>

        case "steel":
            return <div className="steel">Steel</div>

        case "fairy":
            return <div className="fairy">Fairy</div>
        
        case "normal":
            return <div className="normal">Normal</div>

        default:
            return null
    }
    
}

export default Type

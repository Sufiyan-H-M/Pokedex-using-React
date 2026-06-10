import React from 'react'
import './Nav.css'
import SearchBar from './SearchBar'

const Nav = ({search, setSearch}) => {
  return (
    <nav>
      <h1>Pokedex</h1>
      <SearchBar search = {search} setSearch={setSearch}/>
    </nav>
  )
}

export default Nav
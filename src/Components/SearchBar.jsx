import React,{useState} from 'react'
import './SearchBar.css'

const SearchBar = ({search, setSearch}) => {
  return (
    <>
        <div>
            <input
            placeholder="Search Pokemon..."
            onChange={(e)=>{setSearch(e.target.value)}}
            />
            
            {console.log(search)}
        </div>
        
    </>
  )
}

export default SearchBar
import React from 'react'
import Home from './Home'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonDetails from './Components/PokemonDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
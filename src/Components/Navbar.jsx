import React from 'react'
import { Link } from 'react-router-dom'
import NewMovie from './NewMovie'
import Search from './Search'

const Navbar = ({len,handleAdd,title,rating,genre,handleRating,handleTitle,handleGenre}) => {
  return (
    <header className="App-header">
      <div style={{height:'40px',width:'250px'}}>
      <Link style={{color:'white',textDecoration:'none'}} to="/" >
        <h2>Movies App</h2>
      </Link>
      </div>
    <div style={{height:'40px',width:'800px',display:'flex', justifyContent:"space-around"}}>
    <Search title={title} rating={rating} genre={genre} handleRating={handleRating} handleTitle={handleTitle} handleGenre={handleGenre} ></Search>

  
    </div>
      <div style={{height:'40px',width:'250px'}}>
    <NewMovie len={len} handleAdd={handleAdd}></NewMovie>
    </div>
  </header>
  )
}

export default Navbar
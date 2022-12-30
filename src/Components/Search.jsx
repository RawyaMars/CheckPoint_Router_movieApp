import React, { useState } from 'react'
import StarRating from './StarRating'

const Search = ({title,rating,genre,handleRating,handleTitle,handleGenre}) => {
   
  return (
        <form style={{width:'1000',display:'flex'}}>
        <input type="text" value={title} onChange={(e)=>handleTitle(e.target.value)} style={{height:'40px',width:'300px',fontSize:'20px',marginRight:"20px"}} /> 
         <select title="genre" id="genre" onChange={(e)=>handleGenre(e.target.value)} value={genre} style={{height:'40px',width:'100px',fontSize:'20px',marginRight:"20px"}}>
    <option value="action">Action</option>
    <option value="thriller">Thriller</option>
    <option value="comedy">Comedy</option>
  </select>
        <StarRating rating={rating} handleRating={handleRating}> </StarRating>
        </form>
  )
}

export default Search
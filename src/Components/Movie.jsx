import React from 'react'
import MovieCard from './MovieCard'

const Movie = ({data,handleDelete,handleEdit}) => {
  return (
    <div className='movies'>
        {React.Children.toArray(data.map((el,i)=>(<MovieCard movie={el} handleDelete={handleDelete} handleEdit={handleEdit}/>)))}
    </div>
  )
}

export default Movie
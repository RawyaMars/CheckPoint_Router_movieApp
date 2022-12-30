import React from 'react'
import { useParams } from 'react-router-dom';
import StarRating from './StarRating';

const MovieDetails = ({data}) => {
    const {id}=useParams();
    const movie=data.find(el=>el.id==id)
    let timeStamp = Date.parse(movie.publishDate);
    var date = new Date(timeStamp);
    var year = date.getFullYear();
    console.log(movie)
  return (
    <div className="container" style={{backgroundImage: `url(${movie.image})`,backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover'}}> 
    <div className='container2'>
<div className="col" >
      <img src={movie.image} alt={movie.title} style={{height:"40%",width:"40%",padding:"2%"}}/>
      </div>
      <div className="col">
        <div className="row" style={{height:"50%"}}>
        <h1 align='center'> {movie.title}</h1>
        <div className='row-1'><h2 style={{margin:"0.1%",marginRight:'2%'}}> Rating: </h2> <StarRating rating={movie.rating}></StarRating></div>
        <div className='row-1'><h2> Year: </h2> <p> {year}</p></div>
        
        <div className='row-1'><h2> Genre: </h2><p> {movie.genre}</p></div>
        <div className='row-1'><h2> Description: </h2><p> {movie.description}</p></div>
        </div>
        <div className="row" style={{height:"50%"}}>
        <div className='row-1'>
        <h2 style={{marginRight:'10%'}}> Trailer :</h2>
        <iframe align='center' width="700" height="400" src={movie.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       
        </div>
         
            
        </div>
        
      

    </div>
</div>
    
  </div>
  )
}

export default MovieDetails
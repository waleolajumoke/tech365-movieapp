import React from 'react'
const image_path = "https://image.tmdb.org/t/p/w500"
import { unavailable } from '../../config.js'

function MovieCard(movie) {
  return (
    <div className='movie-card'>
      <img src={movie.poster_path ? `${image_path}${movie.poster_path}`: unavailable} alt="" className='poster' />
      <h3 className='title'>{movie.title ? movie.title : movie.name}</h3>
      <span className='vote'>{movie.vote_average.toPrecision(2)}</span>
    </div>
  )
}

export default MovieCard
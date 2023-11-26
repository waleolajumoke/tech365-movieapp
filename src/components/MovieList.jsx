import React from 'react'
import MovieCard from './MovieCard.jsx'
import { useTheme } from '../../ContextApi.jsx'

function MovieList() {
    const { movies } = useTheme()
  return (
        <div className='movies container'>
        {movies.map((movie)=>{
            return (
                <div key={movie.id}>
                    <MovieCard title={movie.title} vote_average={movie.vote_average} poster_path={movie.poster_path} name={movie.name} />
                </div>
            )
        }) }
    </div>
  )
}

export default MovieList
import React from 'react'
import { useTheme } from '../../ContextApi'

function Hero() {
  const {selectedMovie} = useTheme()
  return (
    <div className='hero-section container' style={{backgroundImage: `url('https://image.tmdb.org/t/p/w1280/${selectedMovie?.backdrop_path}')`}}>
        <h1 className='movie-title'>{selectedMovie?.title || selectedMovie?.name}</h1>
        <p className='movie-desc'>{selectedMovie?.overview}</p>
    </div>
  )
}

export default Hero
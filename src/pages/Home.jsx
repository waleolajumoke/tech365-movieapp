import React from 'react'
import { useTheme } from '../../ContextApi.jsx'
import MovieList from '../components/MovieList.jsx'


function Home() {
    const {fetchMovies, searchKey} =useTheme()
    // const type= '/discover/movie'
    const type = searchKey ? '/search/movie':'/trending/all/day'
    fetchMovies(type, searchKey)
  return (
    <MovieList />
  )
}

export default Home
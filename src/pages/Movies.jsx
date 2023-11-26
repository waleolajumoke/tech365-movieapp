import { useTheme } from '../../ContextApi.jsx'
import MovieList from '../components/MovieList.jsx'

function Movies() {
    const {fetchMovies, searchKey} =useTheme()
    const type =  searchKey ? '/search/movie':'/discover/movie'
    fetchMovies(type, searchKey)
  return (
    <div>
        <MovieList />
    </div>
  )
}

export default Movies
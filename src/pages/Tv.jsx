import { useTheme } from '../../ContextApi.jsx'
import MovieList from '../components/MovieList.jsx'

function Tv() {
  const {fetchMovies, searchKey} =useTheme()
  const type =  searchKey ? '/search/tv':'/discover/tv'
    fetchMovies(type, searchKey)
  return (
    <div>
       <MovieList />
    </div>
  )
}

export default Tv
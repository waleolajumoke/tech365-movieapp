import { createContext , useContext ,useState ,  useEffect} from 'react'
const ThemeContext = createContext()
import {api_key} from './config.js'
function ThemeProvider({children}) {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState([])
  const [darkMode, setDarkMode] = useState(true)
  const [searchKey, setSearchKey] = useState('')
  const url = 'https://api.themoviedb.org/3'
  // 'https://api.themoviedb.org/3/search/movie?api_key=778dcf02894f40ff2a5de48a0a87f49e&query=spiderman
  // https://api.themoviedb.org/3/discover/movie?api_key=778dcf02894f40ff2a5de48a0a87f49e
  const fetchMovies = async (type, searchKey) =>{
    const response = await fetch(`${url}${type}?api_key=${api_key}&query=${searchKey}`)
    const data = await response.json()
    // console.log(data.results);
    setMovies(data.results)
    // console.log(data.results[0]);
    setSelectedMovie(data.results[0])
  }
  useEffect(() => {
    fetchMovies()
  },[])

  const toggleTheme = () =>{
      setDarkMode(!darkMode)
      document.body.classList.toggle('dark',darkMode)
  }
  return (
    <ThemeContext.Provider value={{movies, fetchMovies, selectedMovie, toggleTheme, darkMode, searchKey, setSearchKey}}>
      {children}
    </ThemeContext.Provider>
  )
}
export function useTheme(){
  return useContext(ThemeContext)
}

export default ThemeProvider
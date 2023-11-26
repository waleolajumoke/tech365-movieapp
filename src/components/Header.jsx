import Nav from './Nav'
import Hero from './Hero'
import {useTheme} from '../../ContextApi'

function Header() {
  const {searchKey, setSearchKey} = useTheme()
  const searchMovies = (e) =>{
    e.preventDefault()
    setSearchKey(e.target.value)
  }
  return (
    <>
        <Nav />
        <div className='header container'>
            <h2>MovieApp</h2>
            <form action="">
                <input type="text" placeholder='Search Movies' onChange={searchMovies} />
                {/* <button className='btn btn-search'>Search</button> */}
            </form>
        </div>
        <Hero />
    </>
  )
}

export default Header
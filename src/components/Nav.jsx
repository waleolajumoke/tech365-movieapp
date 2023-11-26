import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../ContextApi'
import 'boxicons'
function Nav() {
  const {toggleTheme, darkMode} = useTheme()
  return (
    <div className='navbar container'>
        <nav>
            <ul>
                <li><Link to="/" style={{color: darkMode ? '#000' : '#fff'}}>Home</Link></li>
                <li><Link to="/movies" style={{color: darkMode ? '#000' : '#fff'}}>Movie</Link></li>
                <li><Link to="/tv" style={{color: darkMode ? '#000' : '#fff'}}>Tv</Link></li>
            </ul>
        </nav>
        <box-icon name="sun" animate type="solid" onClick={toggleTheme} color={darkMode ? '#000' : '#fff'}></box-icon>
    </div>
  )
}

export default Nav
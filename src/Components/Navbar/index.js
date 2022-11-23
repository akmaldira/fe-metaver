import React from 'react'
import * as BiIcons from 'react-icons/bi';
import './navbar.css';

const Navbar = ({searchActive}) => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar')
    sidebar.className = 'sidebar active';
  }
  return (
    <nav>
      <div className='menu-btn-wrapper' onClick={handleClick}>
        <BiIcons.BiMenuAltLeft className='icon-menu-btn' />
      </div>
      <div className='search-wrapper'>
        <div className='icon-search-wrapper'>
          <BiIcons.BiSearchAlt className='icon-search'/>
        </div>
        <input type="text" placeholder="Search user, collection or community" required></input>
      </div>
      <div className='button-wrapper'>
        <a href='/'>Apply</a>
        <a href='/'>Login Discord</a>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react'
import './whitelist.css'

const Whitelist = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='whitelist' onClick={handleClick}>Whitelist</div>
  )
}

export default Whitelist
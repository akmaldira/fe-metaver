import React from 'react'
import './support.css'

const Support = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='support' onClick={handleClick}>Support</div>
  )
}

export default Support
import React from 'react'
import './calender.css'

const Calender = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='calender' onClick={handleClick}>Soon</div>
  )
}

export default Calender
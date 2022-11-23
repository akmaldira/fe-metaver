import React from 'react'
import './setting.css'

const Setting = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='setting' onClick={handleClick}>Setting</div>
  )
}

export default Setting
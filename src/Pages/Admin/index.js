import React from 'react'
import './admin.css'

const Admin = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='admin' onClick={handleClick}>Admin</div>
  )
}

export default Admin
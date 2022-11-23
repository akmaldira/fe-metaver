import React from 'react'
import './profile.css'

const Profile = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='profile' onClick={handleClick}>Profile</div>
  )
}

export default Profile
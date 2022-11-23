import React from 'react';
import './dashboard.css'

const Dashboard = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='dashboard' onClick={handleClick}>
      akmaldira
    </div>
  )
}

export default Dashboard
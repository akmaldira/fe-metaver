import React from 'react'
import { Link, NavLink } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import './sidebar.css';

const Sidebar = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='sidebar'>
      <div className='close-sidebar-wrapper' onClick={handleClick}>
        <MdIcons.MdClose className='sidebar-close-btn' />
      </div>
      <div className='logo-wrapper'>
        <Link className='logo' to={'/'}>Metaver</Link>
      </div>
      <div className='menu-wrapper'>
        <NavLink className={({isActive}) => (isActive ? "nav-item active" : 'nav-item')} to={'/'}><MdIcons.MdOutlineSpaceDashboard className='nav-item-icon'/>Explore</NavLink >
        <NavLink className={({isActive}) => (isActive ? "nav-item active" : 'nav-item')} to={'whitelist'}><MdIcons.MdBookmarks className='nav-item-icon'/>Get Whitelist</NavLink >
        <NavLink className={({isActive}) => (isActive ? "nav-item active" : 'nav-item')} to={'calender'}><MdIcons.MdEditCalendar className='nav-item-icon'/>Drop Calender</NavLink >
        <br/>
        
        <NavLink className={({isActive}) => (isActive ? "nav-item active" : 'nav-item')} to={'profile'}><MdIcons.MdOutlinePersonOutline className='nav-item-icon'/>Profile</NavLink >
        <NavLink className={({isActive}) => (isActive ? "nav-item active" : 'nav-item')} to={'setting'}><BsIcons.BsWallet2 className='nav-item-icon'/>My Wallet</NavLink >
        <NavLink className={({isActive}) => (isActive ? "nav-item active" : 'nav-item')} to={'support'}><MdIcons.MdOutlineContactSupport className='nav-item-icon'/>Support</NavLink >
      </div>
      <div className='bottom-wrapper'>
        <p>Our Social Media</p>
        <div className='sidebar-social-media'>
          <Link to={'/'}><FaIcons.FaTwitter className='social-media-icon' /></Link>
          <Link to={'/'}><FaIcons.FaDiscord className='social-media-icon'  /></Link>
          <Link to={'/'}><FaIcons.FaInstagram className='social-media-icon'  /></Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
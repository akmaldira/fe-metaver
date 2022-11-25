import React from 'react'
import ProfileHome from '../../Components/ProfileHome';
import ProfileCollection from '../../Components/ProfileCollection';
import ProfileWallet from '../../Components/ProfileWallet';
import ProfileSetting from '../../Components/ProfileSetting';
import ProfileBanner from '../../assets/images/profilebanner.png';
import ProfilePFP from '../../assets/images/partnerimage.png';
import './profile.css'

const Profile = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }

  const handleCategoryClick = (e) => {
    document.querySelectorAll('.profile-category p').forEach((category) => {
      category.className = '';
    })
    e.target.className = 'active'
    const allProfileContent = document.querySelectorAll('.profile-content div')
    allProfileContent.forEach((content) => {
      content.className = '';
    })
    switch (e.target.innerText) {
      case 'Collection':
        allProfileContent[1].className = 'active'
        break;
      case 'Wallet':
        allProfileContent[2].className = 'active'
        break;
      case 'Setting':
        allProfileContent[3].className = 'active'
        break;
      default:
        allProfileContent[0].className = 'active'
        break;
    }
  }
  return (
    <div className='profile' onClick={handleClick}>
      <div className='main-profile'>
        <div className='profile-category'>
          <p className='active' onClick={handleCategoryClick}>Home</p >
          <p onClick={handleCategoryClick}>Collection</p >
          <p onClick={handleCategoryClick}>Wallet</p >
          <p onClick={handleCategoryClick}>Setting</p >
        </div>
        <div className='profile-content'>
          <div className='active'><ProfileHome /></div>
          <div><ProfileCollection /></div>
          <div><ProfileWallet /></div>
          <div><ProfileSetting /></div>
        </div>
      </div>
      <div className='profile-view'>
        <div className='profile-card'>
          <div className='profile-banner-wrapper'>
            <img className='profile-card-banner' src={ProfileBanner} alt='' />
          </div>
          <div className='profile-pfp-wrapper'>
            <img className='profile-card-pfp' src={ProfilePFP} alt='' />
          </div>
        </div>
        <div className='profile-name'>
          <p>akmaldira#2105</p>
        </div>
      </div>
    </div>
  )
}

export default Profile
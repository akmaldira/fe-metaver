import React from 'react';
import './dashboard.css'
import BigBanner from '../../Components/BigBanner';
import SmallBanner from '../../Components/SmallBanner';
import OurSupport from '../../Components/OurSupport';
import PartnerCard from '../../Components/PartnerCard';
import partnerImage from '../../assets/images/partnerimage.png';

const Dashboard = () => {
  const handleClick = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.className = 'sidebar';
  }
  return (
    <div className='dashboard' onClick={handleClick}>
      <div className='dashboard-content'>
        <BigBanner />
        <div className='content-list'>
          <h4>New Partners</h4>
          <div className='partner-list-wrapper'>
            <PartnerCard name={'Solana Monkey'} image={partnerImage} />
            <PartnerCard name={'Solana Monkey'} image={partnerImage} />
            <PartnerCard name={'Solana Monkey'} image={partnerImage} />
            <PartnerCard name={'Solana Monkey'} image={partnerImage} />
            <PartnerCard name={'Solana Monkey'} image={partnerImage} />
            <PartnerCard name={'Solana Monkey'} image={partnerImage} />
            <PartnerCard name={'Solana Monkey'} image={partnerImage} />
            <PartnerCard name={'Solana Monkey'} image={partnerImage} />
          </div>
        </div>
      </div>
      <div className='dashboard-right-content'>
        <SmallBanner className='smallbanner-wrapper' />
        <OurSupport />
      </div>
    </div>
  )
}

export default Dashboard
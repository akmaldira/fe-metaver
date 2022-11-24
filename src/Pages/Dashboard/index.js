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
            <PartnerCard name={'Solana Monkey'} image={partnerImage} network={'Solana'} slug={'https://akmaldira.dev'}/>
            <PartnerCard name={'Aptos Monkey'} image={partnerImage} network={'Aptos'} slug={'https://akmaldira.dev'}/>
            <PartnerCard name={'Aptos Land'} image={partnerImage} network={'Aptos'} slug={'https://akmaldira.dev'}/>
            <PartnerCard name={'Shi-ka-ku'} image={partnerImage} network={'Aptos'} slug={'https://akmaldira.dev'}/>
            <PartnerCard name={'Flip Coin'} image={partnerImage} network={'Solana'} slug={'https://akmaldira.dev'}/>
            <PartnerCard name={'Pontem Monkey'} image={partnerImage} network={'Aptos'} slug={'https://akmaldira.dev'}/>
            <PartnerCard name={'Solana MBS'} image={partnerImage} network={'Solana'} slug={'https://akmaldira.dev'}/>
            <PartnerCard name={'Aptos XYZ'} image={partnerImage} network={'Aptos'} slug={'https://akmaldira.dev'}/>
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
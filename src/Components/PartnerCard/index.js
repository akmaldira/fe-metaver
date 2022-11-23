import React from 'react'
import './partnercard.css';
import * as FcIcons from 'react-icons/fc';

const PartnerCard = ({image, name, slug}) => {
  return (
    <div className='partner-card'>
        <img src={image} alt='partnerImage' />
        <div className='partner-detail'>
            <div className='partner-name-wrapper'>
                <a href={slug}>{name}</a>
            </div>
            <div className='like-btn'>
                <FcIcons.FcLike />
            </div>
        </div>
    </div>
  )
}

export default PartnerCard
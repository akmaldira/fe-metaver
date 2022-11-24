import React, { useState, useEffect } from 'react'
import './partnercard.css';
import solanaImage from '../../assets/images/solana.svg';
import aptosImage from '../../assets/images/aptos.svg';

const PartnerCard = ({image, name, network, slug}) => {
  const [imagePath, setImagePath] = useState(solanaImage);
  
  useEffect(() => {
    network === 'Aptos' ? setImagePath(aptosImage) : setImagePath(solanaImage);
    network === 'Solana' ? setImagePath(solanaImage) : setImagePath(aptosImage);
    return () => {};
  }, [network]);

  const onClickHandle = () => {
    window.open(slug, '_blank');
  }

  return (
    <div className='partner-card' onClick={onClickHandle}>
        <img src={image} alt='partnerImage' className='partner-image' />
        <div className='partner-detail'>
            <div className='partner-name-wrapper'>
              <p>{name}</p>
            </div>
            <div className='network'>
              <img src={imagePath} alt='' />
              <p>{network}</p>
            </div>
        </div>
    </div>
  )
}

export default PartnerCard
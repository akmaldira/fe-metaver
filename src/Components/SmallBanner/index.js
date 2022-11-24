import React from 'react'
import './smallbanner.css';
import partnerImage from '../../assets/images/partnerimage.png';
import CollectionList from '../CollectionList';

const SmallBanner = () => {
  return (
    <div className='smallbanner'>
      <h5>Trending Collection</h5>
      <div className='trending-collection-wrapper'>
        <CollectionList name={'Test'} image={partnerImage} network={'Solana'} />
        <CollectionList name={'Test'} image={partnerImage} network={'Sui'} />
        <CollectionList name={'Test'} image={partnerImage} network={'Aptos'} />
        <CollectionList name={'Test'} image={partnerImage} network={'Sui'} />
        <CollectionList name={'Test'} image={partnerImage} network={'Solana'} />
      </div>
    </div>
  )
}

export default SmallBanner
import React from 'react'
import partnerImage from '../../assets/images/partnerimage.png';
import CollectionList from '../CollectionList';
import './oursupport.css';

const OurSupport = () => {
  return (
    <div className='our-support'>
        <h5>We Support Project</h5>
        <div className='our-support-list-wrapper'>
          <CollectionList name={'Test'} image={partnerImage} network={'Aptos'} />
          <CollectionList name={'Test'} image={partnerImage} network={'Aptos'} />
          <CollectionList name={'Test'} image={partnerImage} network={'Aptos'} />
          <CollectionList name={'Test'} image={partnerImage} network={'Solana'} />
          <CollectionList name={'Test'} image={partnerImage} network={'Sui'} />
          <CollectionList name={'Test'} image={partnerImage} network={'Sui'} />
          <CollectionList name={'Test'} image={partnerImage} network={'Sui'} />
          <CollectionList name={'Test'} image={partnerImage} network={'Solana'} />
        </div>
    </div>
  )
}

export default OurSupport
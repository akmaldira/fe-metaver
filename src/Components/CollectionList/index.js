import React from 'react'
import './collectionlist.css';

const CollectionList = ({name, image, network}) => {
  return (
    <div className='collection-list'>
        <div className='detail'>
            <img src={image} alt='' />
            <a href='/'>{name}</a>
        </div>
        <p>{network}</p>
    </div>
  )
}

export default CollectionList
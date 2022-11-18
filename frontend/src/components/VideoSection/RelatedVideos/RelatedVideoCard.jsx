import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './RelatedVideoCard.css'


const RelatedVideoCard = ({image, title, channel, timestamp, channelImage}) => {
    return (
        <div className='videocard'>
          <img className='videocard__image' src={image} alt='' />
          <div className="videocard__info">
            <div className="videocard__text">
              <h4>{title}</h4>
              <p>{channel}</p>
              <p>{timestamp}</p>
            </div> 
          </div>
        </div>
    )
}

export default RelatedVideoCard;
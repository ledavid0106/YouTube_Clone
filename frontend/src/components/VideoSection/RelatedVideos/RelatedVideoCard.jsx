import React from 'react';
import Avatar from '@material-ui/core/Avatar';


const RelatedVideoCard = ({image, title, channel, timestamp, channelImage}) => {
    return (
        <div className='videocard'>
          <img className='videocard__image' src={image} alt='' />
          <div className="videocard__info">
            <Avatar 
              className='videocard__avatar' 
              alt={channel} 
              src={channelImage} 
            />
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
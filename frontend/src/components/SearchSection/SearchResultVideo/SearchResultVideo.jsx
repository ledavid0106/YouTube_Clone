import React from 'react';
import './SearchResultVideo.css'


const SearchResultVideo = ({views, description, timestamp, channel, title, image}) => {
    return (
        <div className='SearchResults'>
          <img src={image} alt="" />
          <div className="SearchResults__text">
              <h3>{title}</h3>
              <p className='SearchResults__headline'>
                {channel} • {views} views • {timestamp}
              </p>
              <p className='SearchResults__description'>
                {description}
              </p>
          </div>
        </div>
    )
}

export default SearchResultVideo;
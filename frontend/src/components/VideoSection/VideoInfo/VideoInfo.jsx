import React from 'react';
import { Avatar} from '@material-ui/core';


const VideoInfo = ({title, description, publishedDate, channelTitle, channelImage, viewCount, likeCount, dislikeCount}) => {
    return (
        <div className='videoinfo'>
            <div className='videoinfo__headline'>
                <h1>{title}</h1>
            </div>
            <div className='videoinfo__stats'>
                <p>{viewCount} views • {publishedDate}</p>
            </div>
            <hr />
            <div className="videoinfo__channel">
                <div>
                    <Avatar 
                        className='videoinfo__avatar' 
                        alt={channelTitle} 
                        src={channelImage} 
                    />
                    <div className='videoinfo__channelinfo'>
                        <h3 className='videoinfo__channeltitle'>{channelTitle}</h3>
                    </div>
                    
                </div>
            </div>
            <div className='videoinfo__channeldesc'>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default VideoInfo;
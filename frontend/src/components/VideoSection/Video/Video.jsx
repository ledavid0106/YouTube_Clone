import React from 'react';
import YouTube from 'react-youtube';

const Video = ({videoId}) => {
    return (
        <div>
          {/* react-youtube is a component acting as a thin layer over iframe. It still uses iframe but just makes it easier for the developer. Therefore still meets userstory requirements*/}
          <YouTube
            width={740}
            videoId={videoId}
          />
        </div>
    )
}

export default Video;
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import {DateTime} from 'luxon';
import {useParams} from 'react-router';
import RelatedVideoCard from './RelatedVideoCard';
import apikey from "../../../key"


const RelatedVideos = () => {
    
    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    let { videoId } = useParams();

    useEffect(() => {
      axios
        .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${apikey}`)
        .then(response => {
          createVideoCards(response.data.items);
        })
        .catch(error => {
          console.log(error);
          setIsError(true);
        })
    }, [])

    async function createVideoCards(videoItems) {
      let newVideoCards = [];
      for (const video of videoItems) {
        const videoId = video.id;
        const snippet = video.snippet;

        const channelId = snippet.channelId;
        const response = await axios
                              .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${key}`)
        const channelImage = response.data.items[0].snippet.thumbnails.medium.url;

        const title = snippet.title;
        const image = snippet.thumbnails.medium.url;
        const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
        const channel = snippet.channelTitle;

        newVideoCards.push({
          videoId,
          image,
          title,
          channel,
          timestamp,
          channelImage
        });
      };
      setVideoCards(newVideoCards);
      setIsLoading(false);
    }

    if(isError) {
      return <Alert severity="error" className='loading'>No Results found!</Alert>
    }
    return (
        
        <div className='recommendedvideos'>
            { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
            <div className="recommendedvideos__videos">
                {
                  videoCards.map(item => {
                    return (
                            <Link key={item.videoId} to={`/video/${item.videoId}`}>
                              <RelatedVideoCard
                                title={item.title}
                                image={item.image}
                                timestamp={item.timestamp}
                                channel={item.channel}
                                channelImage={item.channelImage}
                              />
                            </Link>
                    )
                  })
                }
            </div>
        </div>
    )
}

 
export default RelatedVideos;
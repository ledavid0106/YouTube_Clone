import SearchBar from "../../components/SearchSection/SearchBar/SearchBar";
import SearchResults from "../../components/SearchSection/SearchResult/SearchResult";
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';
import axios from 'axios';
import {DateTime} from 'luxon';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';



const SearchPage = (props) => {
    let key = "AIzaSyA2Lt0QJgXTENAsG0hmS4r3kmUDqdSBxK4"
    let {searchQuery} = useParams();
    const [videoRows, setVideoRows] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
        useEffect(() => {
            setVideoRows([]);
            axios
              .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&type=video&q=${searchQuery}&safeSearch=none&key=${key}`)
              .then(response => {
                createVideoRows(response.data['items']);
                setIsError(false);
              })
              .catch(error => {
                console.log(error);
                setIsError(true);
                setIsLoading(false);
              })
      
          }, [searchQuery])


    async function createVideoRows(videos) {
        let newVideoRows = [];
        for (const video of videos) {
          const videoId = video.id.videoId;
          const response = await axios
                                  .get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=${key}`)
          const views = response.data.items[0].statistics.viewCount;
          const snippet = video.snippet;
          const title = snippet.title;
          const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
          const channel = snippet.channelTitle;
          const description = snippet.description;
          const image = snippet.thumbnails.medium.url;
      
          newVideoRows.push({
            videoId,
            title,
            image,
            views,
            timestamp,
            channel, 
            description
          });
        };
        setVideoRows(newVideoRows);
        setIsLoading(false);
      }
      if (isError) {
        return <Alert severity="error" className='loading'>No Results found!</Alert>
      }
  return (
    <div className="searchpage">
        <SearchBar/>
    { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
    {videoRows.map(item => {
        return (
                  <SearchResults
                    title={item.title}
                    image={item.image}
                    views={item.views}
                    timestamp={item.timestamp}
                    channel={item.channel}
                    description={item.description}
                  />
        )})}
    </div>)
}

export default SearchPage;

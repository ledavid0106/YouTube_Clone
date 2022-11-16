import React, {useState, useEffect} from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";


const SearchPage = ({}) => {
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState({});
    const key = "AIzaSyA2Lt0QJgXTENAsG0hmS4r3kmUDqdSBxK4"

    useEffect(() => {
        getQuery();
    }, [query]);

    async function getQuery() {
        let response = await axios.get(
            `https://www.googleapis.com/youtube/v3/search?q=${query}&key=${key} `
        );
        setSearchResults(response.data);
        console.log(searchResults)
    }



    return ( 
        <div>
           <SearchBar query={query} setQuery={setQuery} />
        {searchResults.map((video) => {
            return <SearchResults video={video} />
        })}
        </div>
     );
}
 
export default SearchPage;
import SearchBar from "../../components/SearchSection/SearchBar/SearchBar";
import SearchResults from "../../components/SearchSection/SearchResults/SearchResults";


const SearchPage = (props) => {
    return ( 
        <div>
        <SearchBar/>
        <SearchResults/>
        </div>
     );
}
 
export default SearchPage;
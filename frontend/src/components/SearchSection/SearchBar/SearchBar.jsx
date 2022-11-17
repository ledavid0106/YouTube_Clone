import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    const [inputSearch, setInputSearch] = useState('');
    return ( 
        <div className="header__center">
            <input type='text' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}/>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='header__searchbutton'/>
            </Link>
        </div>
     );
}
 
export default SearchBar;

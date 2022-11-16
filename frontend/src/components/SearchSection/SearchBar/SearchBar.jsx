import React, {useState} from "react";


const SearchBar = ( {setQuery, getQuery}) => {
    const [tempQuery, setTempQuery] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setQuery(tempQuery)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder="Search here..."
                size='100'
                value={tempQuery}
                onChange={(event) => setTempQuery(event.target.value)}
            />
            <button>GO</button>
        </form>
     );
}
 
export default SearchBar;
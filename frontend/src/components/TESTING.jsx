

function App() {
    const [query, setQuery] = useState('Dogs');
    const [list, setList] = useState(null);
    const key = "AIzaSyA2Lt0QJgXTENAsG0hmS4r3kmUDqdSBxK4"
    let q='dogs'
    async function searchYouTube(q) {
      q = encodeURIComponent(q);
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=${q}&key=${key} `
    );
        return (response.data)
    }
    const search = (e) => {
      e.preventDefault();
      searchYouTube(query).then(setList);
    };
  
    return (
      <div className="app">
        <form onSubmit={search}>
          <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
          <button>Search YouTube</button>
        </form>
        {list &&
          (list.length === 0
            ? <p>No results</p>
            : (
              <ul className="items">
                {list.map(item => (
                  <li className="item" key={item.id}>
                    <div>
                      <b><a href={item.link}>{item.title}</a></b>
                      <p>{item.description}</p>
                    </div>
                    <ul className="meta">
                      <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
                      <li>Views: {item.views}</li>
                      <li>Duration: {item.duration}</li>
                      <li>Uploaded: {item.uploaded_at}</li>
                    </ul>
                    <img alt="" src={item.thumbnail} />
                  </li>
                ))}
              </ul>
            )
          )
        }
      </div>
    );
  }
  
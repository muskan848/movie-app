import './Search.css';

function Search({search,setSearch}) {
    return (
        <div className="search">
            <input value={search} onChange={(event)=>setSearch(event.target.value)} type="text" placeholder="Search" />
        </div>
    );
}

export default Search;
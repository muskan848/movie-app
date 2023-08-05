import './App.css';
import { useEffect, useState } from 'react';
import MovieList from './components/MovieList.js';
import Header from './components/Header.js';
import Search from './components/Search';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

function App() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [favs, setFavs] = useState([]);


    useEffect(() => {
        getMovieRequest();
    }, [search])


    useEffect(() => {
        const retrieveFavs = JSON.parse(localStorage.getItem('react-movie-app-favourites'));
        setFavs(retrieveFavs);
    }, [])


    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?s=${search}&apikey=2876891e`;
        const response = await fetch(url);
        const responseJson = await response.json();
        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    }

    const saveToLocalStorage = ((items) => {
        localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
    });

    const addFavs = ((movie) => {
        const newList = [...favs, movie];
        setFavs(newList);
        saveToLocalStorage(newList);
        // console.log(favs);
    });

    const removeFavs = ((movie) => {
        const newList = favs.filter((fav) => fav.imdbID !== movie.imdbID);
        setFavs(newList);
        saveToLocalStorage(newList);
    });

    return (
        <div className="movie-app">
            <Header heading='Movies'></Header>
            <Search search={search} setSearch={setSearch}></Search>
            <MovieList movies={movies} addFavs={addFavs} AddFavourites={AddFavourites}></MovieList>
            {favs.length > 0 &&
                <> <Header heading='Favourites 0.0'></Header>
                    <MovieList movies={favs} addFavs={removeFavs} AddFavourites={RemoveFavourites}></MovieList>
                </>
            }

        </div>
    );
}

export default App;

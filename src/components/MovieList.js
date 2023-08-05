import './MovieList.css';

function MovieList(props) {
    const movies = props.movies;
    const AddFavourites = props.AddFavourites;

    return (
        <div className="scroll">
          <div className="movie-list">
            {movies.map((movie) => (
              <div className="images" key={movie.id}>
                <img className="movie-item" src={movie.Poster} alt="movie poster" />
                <div onClick={()=>props.addFavs(movie)} className="favs">
                  <AddFavourites />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}
export default MovieList;
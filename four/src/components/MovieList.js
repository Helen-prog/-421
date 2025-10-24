import './MovieList.css';
import Movie from './Movie';

function MovieList(props){
    const {movies = []} = props;

    return(
        <div className="movies">
            {
                movies.length ? movies.map((movie, index) => {
                    return <Movie key={index} {...movie} /> 
                }) : <h4>Nothing fount</h4>
            }
        </div>
    )
}

export default MovieList;
import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';

const MovieDetail = () => {

     const { id } = useParams();
     const [movie, SetMovie] = useState();

	 useEffect(() => {
		async function getMovie() {
			const res = await fetch(`https://www.omdbapi.com/?apikey=f86adc59&i=${id}`);
        	const data = await res.json();
			SetMovie(data);	
			console.log(data);
		}
		getMovie();
	 },[id])

	 if(!movie) return <p>Loading...</p>

    return(
        <div className="movie-detail">
		<h2>{movie.Title}</h2>
		<img alt={movie.Title} src={movie.Poster} />
		<p><strong>Director: </strong>{movie.Director}</p>
		<p><strong>imdb Rating: </strong>{movie.imdbRating}</p>
		<p><strong>Languages: </strong>{movie.Language}</p>
		<p><strong>Box Office: </strong>{movie.BoxOffice}</p>
		<p><strong>Genre: </strong>{movie.Genre}</p>
		<p><strong>Released: </strong>{movie.Released}</p>
		<p><strong>Plot: </strong>{movie.Plot}</p>
	</div>
    );
}

export default MovieDetail;
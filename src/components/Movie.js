import React from "react";
import propTypes from "prop-types";
import {Link} from "react-router-dom";
import "../css/Movie.css" 

function Movie({title, year, summary, poster, genres}) {
    return (
        <div className="movie"> 
            <Link to={{
                    pathname: 'movie-detail', 
                    state: { year, title, summary, poster, genres}, 
                }}
            >
                <img src={poster} alt={title} title={title} /> 
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie_genres">
                        {genres.map((genre, index) => {
                            return <li className="movie__genre" key={index}>{genre}</li>; 
                        })}
                    </ul>
                    <p className="movie__summary">{summary.slice(0, 180)}...</p>
                    
                </div>
            </Link>
        </div>
    ); 
}


Movie.ReactPropTypes = {
    id: propTypes.number.isRequired, 
    year: propTypes.number.isRequired, 
    title: propTypes.string.isRequired, 
    summary: propTypes.string.isRequired, 
    poster: propTypes.string.isRequired, 
    genres: propTypes.arrayOf(propTypes.string).isRequired, 
}; 


export default Movie;
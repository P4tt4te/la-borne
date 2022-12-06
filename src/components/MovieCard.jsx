import React from "react";

const MovieCard = ({ title, poster_path }) => {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={poster_path}/>
            </div>
            <div className="movie-title">
                {title}
            </div>
        </div>
    )
}

export default MovieCard;

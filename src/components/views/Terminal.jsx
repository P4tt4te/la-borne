import React from "react";
import MovieCard from "../MovieCard";

const Terminal = ({
    handleChangeView
}) => {
    const buttonsFilter = [
        "Par genre",
        "Par popularité",
        "Recherche"
    ]

    const moviesCard = [
        "titre1",
        "titre2",
        "titre3",
        "titre1",
        "titre2",
        "titre3"
    ]

    return (
        <div className="terminal">
            <div className="terminal-border-left">
                <div className="terminal-buttons-filter">
                    {
                        buttonsFilter.map((buttonFilter, i) => (
                            <div className="button-filter" key={i}>{buttonFilter}</div>
                        ))
                    }
                </div>
                <div className="movie-cards">
                    {
                        moviesCard.map((movieCard, i) => (
                            <MovieCard title={movieCard} key={i} />
                        ))
                    }
                </div>
            </div>
            <div className="terminal-border-right">
                border right
            </div>
        </div>
    )
}

export default Terminal;

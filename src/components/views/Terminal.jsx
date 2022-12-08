import React, { useState, useEffect } from "react";
import { getFilms } from "../../api/getFilms";
import MovieCard from "../MovieCard";

const Terminal = ({
    handleChangeView
}) => {
    const [isLoading, setIsLoading] = useState(true) // popular | top_rated
    const [page, setPage] = useState(1) // popular | top_rated
    const [requestType, setRequestType] = useState("top_rated") // popular | top_rated
    const [selectedButtonFilter, setSelectedButtonFilter] = useState("popular") // popular | top_rated
    const [filmsData, setFilmsData] = useState() // popular | top_rated

    const buttonsFilter = [
        {
            value : "popular",
            text : "Par popularité"
        },
        {
            value : "top_rated",
            text : "Les mieux notés"
        },
        {
            value : "search",
            text : "Recherche"
        }
    ]

    async function fetchFilms () {
        setIsLoading(true);
        const films = await getFilms(requestType, page)
        setFilmsData(films)
        setIsLoading(false);
        console.log(films);
    }

    useEffect(() => {
        fetchFilms()
    }, [])


    return (
        <div className="terminal">
            <div className="terminal-border-left">
                <div className="terminal-buttons-filter">
                    {
                        buttonsFilter.map((buttonFilter, i) => (
                            <button value={buttonFilter.value} className={selectedButtonFilter === buttonFilter.value ? "button-filter active" : "button-filter"} key={i}>{buttonFilter.text}</button>
                        ))
                    }
                </div>
                <div className="movie-cards">
                    {
                        isLoading ?
                            <span>Chargement ...</span> :
                            filmsData.results.map((movie, i) => (
                                <MovieCard poster_path={movie.poster_path} title={movie.title} key={i} />
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

import React, { useState, useEffect } from "react";
import { getFilms } from "../../api/getFilms";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from "keen-slider/react"

const Terminal = ({
    handleChangeView
}) => {
    const [sliderRef] = useKeenSlider({
        slides: {
            origin: "center",
            perView: 3,
            spacing: 44,
        },
    })
    const [isLoading, setIsLoading] = useState(true) // popular | top_rated
    const [page, setPage] = useState(1) // popular | top_rated
    const [requestType, setRequestType] = useState("top_rated") // popular | top_rated
    const [selectedButtonFilter, setSelectedButtonFilter] = useState("popular") // popular | top_rated
    const [filmsData, setFilmsData] = useState() // popular | top_rated

    const buttonsFilter = [
        {
            value: "popular",
            text: "Par popularité"
        },
        {
            value: "top_rated",
            text: "Les mieux notés"
        },
        {
            value: "search",
            text: "Recherche"
        }
    ]

    async function fetchFilms() {
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
                            <span>Chargement...</span> :
                            <div ref={sliderRef} className="keen-slider">
                                {
                                    filmsData.results.map((movie, i) => (
                                        <div className={"movie-poster keen-slider__slide number-slide" + i} key={i}>
                                            <div>
                                                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.poster_path} />
                                            </div>
                                            <div className="movie-title">
                                                {movie.title}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                    }
                </div>
            </div>
            <div className="terminal-border-right">
                border right
            </div>
        </div >
    )
}

export default Terminal;

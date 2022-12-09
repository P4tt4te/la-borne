import React, { useEffect, useState } from "react";

import arrow from "../../assets/arrow.svg"
import chevronLeft from "../../assets/buttons/chevronLeft.svg"

import { DatavizSlide } from "../Dataviz/DatavizSlide";

export const fakeData = [
    {
        "adult": false,
        "backdrop_path": "/cO8zcdPhLT3UdykkXCvfhIVrgHK.jpg",
        "belongs_to_collection": {
            "id": 8945,
            "name": "Mad Max Collection",
            "poster_path": "/bmzns8d1tz3P2EWoz2JQeqnu9Ck.jpg",
            "backdrop_path": "/gwYe803SFwKlCF5y71OicWHUnVD.jpg"
        },
        "budget": 10000000,
        "genres": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 878,
                "name": "Science Fiction"
            }
        ],
        "homepage": "",
        "id": 9355,
        "imdb_id": "tt0089530",
        "original_language": "en",
        "original_title": "Mad Max Beyond Thunderdome",
        "overview": "Mad Max becomes a pawn in a decadent oasis of a technological society, and when exiled, becomes the deliverer of a colony of children.",
        "popularity": 28.378,
        "poster_path": "/jJlxcEVVUHnrUeEkQ0077VeHQpb.jpg",
        "production_countries": [
            {
                "iso_3166_1": "AU",
                "name": "Australia"
            }
        ],
        "release_date": "1985-06-29",
        "revenue": 36230219,
        "runtime": 107,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Two men enter. One man leaves.",
        "title": "Mad Max Beyond Thunderdome",
        "video": false,
        "vote_average": 6.195,
        "vote_count": 2327
    },
    {
        "adult": false,
        "backdrop_path": "/mhpDSuNyHPMsccI7zISEaskTgOQ.jpg",
        "belongs_to_collection": null,
        "budget": 40000000,
        "genres": [
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 18,
                "name": "Drama"
            },
            {
                "id": 36,
                "name": "History"
            },
            {
                "id": 10749,
                "name": "Romance"
            },
            {
                "id": 10752,
                "name": "War"
            }
        ],
        "homepage": "",
        "id": 9361,
        "imdb_id": "tt0104691",
        "original_language": "en",
        "original_title": "The Last of the Mohicans",
        "overview": "In war-torn colonial America, in the midst of a bloody battle between British, the French and Native American allies, the aristocratic daughter of a British Colonel and her party are captured by a group of Huron warriors. Fortunately, a group of three Mohican trappers comes to their rescue.",
        "popularity": 19.389,
        "poster_path": "/fYVQRcgnOv998bKEplzrD3faGgt.jpg",
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "1992-08-26",
        "revenue": 75505856,
        "runtime": 112,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            },
            {
                "english_name": "French",
                "iso_639_1": "fr",
                "name": "Français"
            }
        ],
        "status": "Released",
        "tagline": "The first American hero.",
        "title": "The Last of the Mohicans",
        "video": false,
        "vote_average": 7.389,
        "vote_count": 2555
    },
    {
        "adult": false,
        "backdrop_path": "/mTWY8zBVWtE4hYsnOiCTWNBw59j.jpg",
        "belongs_to_collection": {
            "id": 97459,
            "name": "The Jungle Book Collection",
            "poster_path": "/v6kRvYc9OHZSqwFT400W9aMeWah.jpg",
            "backdrop_path": "/4dk3nGhGHDqXuUdPC5QASTSkrIb.jpg"
        },
        "budget": 4000000,
        "genres": [
            {
                "id": 10751,
                "name": "Family"
            },
            {
                "id": 16,
                "name": "Animation"
            },
            {
                "id": 12,
                "name": "Adventure"
            }
        ],
        "homepage": "http://movies.disney.com/the-jungle-book-1967",
        "id": 9325,
        "imdb_id": "tt0061852",
        "original_language": "en",
        "original_title": "The Jungle Book",
        "overview": "The boy Mowgli makes his way to the man-village with Bagheera, the wise panther. Along the way he meets jazzy King Louie, the hypnotic snake Kaa and the lovable, happy-go-lucky bear Baloo, who teaches Mowgli The Bare Necessities of life and the true meaning of friendship.",
        "popularity": 62.588,
        "poster_path": "/fyKUxjaOP8KINir6MPFprsGtiT0.jpg",
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "1967-10-18",
        "revenue": 205843612,
        "runtime": 78,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "The Jungle is JUMPIN'!",
        "title": "The Jungle Book",
        "video": false,
        "vote_average": 7.278,
        "vote_count": 5482
    },
    {
        "adult": false,
        "backdrop_path": "/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
        "belongs_to_collection": {
            "id": 87096,
            "name": "Avatar Collection",
            "poster_path": "/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg",
            "backdrop_path": "/iaEsDbQPE45hQU2EGiNjXD2KWuF.jpg"
        },
        "budget": 375000000,
        "genres": [
            {
                "id": 878,
                "name": "Science Fiction"
            },
            {
                "id": 28,
                "name": "Action"
            },
            {
                "id": 12,
                "name": "Adventure"
            },
            {
                "id": 14,
                "name": "Fantasy"
            }
        ],
        "homepage": "https://www.avatar.com/movies/avatar-the-way-of-water",
        "id": 76600,
        "imdb_id": "tt1630029",
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 869.07,
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "production_companies": [
            {
                "id": 574,
                "logo_path": "/iB6GjNVHs5hOqcEYt2rcjBqIjki.png",
                "name": "Lightstorm Entertainment",
                "origin_country": "US"
            },
            {
                "id": 127928,
                "logo_path": "/cxMxGzAgMMBhTXkcpYYCxWCOY90.png",
                "name": "20th Century Studios",
                "origin_country": "US"
            }
        ],
        "production_countries": [
            {
                "iso_3166_1": "US",
                "name": "United States of America"
            }
        ],
        "release_date": "2022-12-14",
        "revenue": 0,
        "runtime": 192,
        "spoken_languages": [
            {
                "english_name": "English",
                "iso_639_1": "en",
                "name": "English"
            }
        ],
        "status": "Released",
        "tagline": "Return to Pandora.",
        "title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 8.455,
        "vote_count": 11
    }


]

const Dataviz = ({
    handleChangeView
}) => {

    const colors = [
        '#AE2121',
        '#1F8E2B',
        '#D8D128',
        '#EC8B32',
        '#25C0CA',
        '#D336D7',
        '#6122E7',
        '#1D37C3',
    ]
    let labelBudgets = ["0 - 10 000 €", "10 000 € - 100 000 €", "100 000 € - 500 000 €", "500 000 € - 900 000 €", "900 000 € - 1 000 000 €", "> 1 000 000 €"];
    let labelAnnees = ["1960 - 1970", "1970 - 1980", "1980 - 1990", "1990 - 2000", "2000 - 2010", "2010 - Ajourd'hui"];

    const [genresData, setGenresData] = useState([]);
    const [budgetsData, setBudgetsData] = useState([]);
    const [geoData, setGeoData] = useState([]);
    const [anneesData, setAnneesData] = useState([]);
    const [deficitData, setDeficitData] = useState(0); // en pourcentage
    const [reviewsData, setReviewsData] = useState(0); // en pourcentage

    const options = {
        colors: colors,
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            },
        },
        chart: {
            toolbar: {
                show: false,
                tools: {
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                }
            },


        }
    }
    const optionsBudget = {
        colors: colors,
        dataLabels: {
            enabled: false
        },

        chart: {
            type: "donut",
            toolbar: {
                show: false,
                tools: {
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                }
            },
        },
        size: '65%',
        labels: labelBudgets
    }

    const optionsAnnees = {
        colors: colors,
        dataLabels: {
            enabled: false
        },

        chart: {
            type: "donut",
            toolbar: {
                show: false,
                tools: {
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                }
            },
        },
        size: '65%',
        labels: labelAnnees
    }

    const series = [
        {
            name: "Genres",
            data: genresData
        }
    ]

    const seriesBudgets = budgetsData
    const seriesAnnees = anneesData

    const makeDataBudgets = () => {
        let res = []
        labelBudgets.forEach(a => res.push(0))

        fakeData.forEach(fd => { // On itere la liste des donnees
            if (fd.budget >= 0 && fd.budget < 10000) {
                res[0]++
            } else if (fd.budget >= 10000 && fd.budget < 100000) { // petit 
                res[1]++
            } else if (fd.budget >= 100000 && fd.budget < 500000) { // un peu moins petit
                res[2]++
            } else if (fd.budget >= 500000 && fd.budget < 900000) { // moyen
                res[3]++
            } else if (fd.budget >= 900000 && fd.budget < 1000000) { // gros
                res[4]++
            } else { // enorme 
                res[5]++
            }
        })
        setBudgetsData([...res]);
    }
    const makeDataGenres = () => {
        let res = [];

        fakeData.forEach(fd => { // On itere la liste des donnees
            if (fd.genres.length > 0) { // Si le film contient une liste de genres
                fd.genres.forEach(genre => { // On itere sa liste de genre
                    if (res.length > 0) { // Si la liste resultat n'est pas vide
                        if (res.filter(g => g.x === genre.name).length > 0) { // On cherche si le genre est deja dans la liste resultat
                            res.forEach(g => { // On itere la liste resultat
                                if (g.x === genre.name) {
                                    g.y++ // On incremente le compteur du genre
                                }
                            })
                        } else { // Si le genre n'est pas deja dans la liste resultat
                            res.push({ // On ajoute le genre dans la liste avec le compteur initie a 1
                                x: genre.name,
                                y: 1
                            })
                        }
                    } else { // Si la liste resultat est vide, on ajoute le genre avec le compteur initie a 1
                        res.push({
                            x: genre.name, // name
                            y: 1 // count
                        })
                    }
                })
            }
        })

        setGenresData([...res]);
    }
    const makeDataDeficit = () => {
        let deficitCount = 0;

        const total = fakeData.length

        fakeData.forEach(fd => { // On itere la liste des donnees
            if (fd.budget - fd.revenue >= 0) {
                deficitCount++;
            }
        })
        let res = (deficitCount / total) * 100;
        setDeficitData(res)
    }
    const makeDataGeography = () => {
        let res = [
            ["Country", "Movies"]
        ];
        let countries = [];
        fakeData.forEach(fd => { // On itere la liste des données
            fd.production_countries.forEach(country => {
                if (!countries.includes(country.iso_3166_1)) {
                    countries.push(country.iso_3166_1)
                    res.push([country.iso_3166_1, 1])
                } else {
                    res.forEach(c => {
                        if (c[0] === country.iso_3166_1) {
                            c[1]++
                        }
                    })
                }
            })
        })

        setGeoData([...res])
    }
    const makeDataReviews = () => {
        let reviewsCount = 0;

        const total = fakeData.length

        fakeData.forEach(fd => { // On itere la liste des donnees
            if (fd.vote_average >= 7) {
                reviewsCount++
            }
        })
        let res = (reviewsCount / total) * 100;
        setReviewsData(res)
    }
    const makeDataAnnees = () => {
        let res = []
        labelAnnees.forEach(a => res.push(0))

        fakeData.forEach(fd => { // On itere la liste des donnees
            const release_year = parseInt(fd.release_date.slice(0, 4))
            if (release_year >= 1950 && release_year < 1960) {
                res[0]++
            } else if (release_year >= 1960 && release_year < 1970) {
                res[1]++
            } else if (release_year >= 1970 && release_year < 1980) {
                res[2]++
            } else if (release_year >= 1980 && release_year < 1990) {
                res[3]++
            } else if (release_year >= 1990 && release_year < 2000) {
                res[4]++
            } else if (release_year >= 2000 && release_year < 2010) {
                res[4]++
            } else {
                res[5]++
            }
        })
        setAnneesData([...res]);
    }
    useEffect(() => {
        makeDataGenres()
        makeDataBudgets()
        makeDataGeography()
        makeDataDeficit()
        makeDataReviews()
        makeDataAnnees()
    }, [])

    return (
        <div className="terminal">
            <div className="terminal-border-left">
                <div>
                    <button
                        className="button-retour"
                        onClick={() => handleChangeView("terminal")}
                    >
                        <img width={30} src={chevronLeft} />
                        <span>Retour</span>
                    </button>
                </div>
                <DatavizSlide
                    isLoading={false}
                    optionsAnnees={optionsAnnees}
                    seriesAnnees={seriesAnnees}
                    reviewsData={reviewsData}
                    deficitData={deficitData}
                    options={options}
                    series={series}
                    optionsBudget={optionsBudget}
                    seriesBudgets={seriesBudgets}
                    geoData={geoData}
                />

            </div>
            <div className="terminal-border-right">
                <div className="terminal-right-ticket">
                    <span>Récupérer votre ticket</span>
                    <div>
                        <img src={arrow} />
                        <img src={arrow} />
                        <img src={arrow} />
                    </div>
                    <div className="terminal-ticket">
                        <div className="terminal-ticket-box"></div>
                        <div
                            onClick={() => handleChangeView("theater")}
                            className={`terminal-ticket-container `}
                        >

                        </div>
                    </div>
                </div>
                <div className="terminal-right-title">
                    <h1>La borne</h1>
                    <p>831,946 films</p>
                </div>
            </div>
        </div>

    )
}

export default Dataviz;
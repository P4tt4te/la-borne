import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import arrow from "../../assets/arrow.svg"
import chevronLeft from "../../assets/buttons/chevronLeft.svg"

import { DatavizSlide } from "../Dataviz/DatavizSlide";



const Dataviz = ({
    handleChangeView
}) => {
    const { filmHistoric } = useSelector((state) => state.playerReducer);

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

        filmHistoric.forEach(fd => { // On itere la liste des donnees
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

        filmHistoric.forEach(fd => { // On itere la liste des donnees
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

        const total = filmHistoric.length

        filmHistoric.forEach(fd => { // On itere la liste des donnees
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
        filmHistoric.forEach(fd => { // On itere la liste des données
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

        const total = filmHistoric.length

        filmHistoric.forEach(fd => { // On itere la liste des donnees
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

        filmHistoric.forEach(fd => { // On itere la liste des donnees
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
        console.log("filmHistoric : ", filmHistoric);
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
                <div className="nb-films">
                    <span>Vous avez visionné <b>{filmHistoric.length}</b> films</span>
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
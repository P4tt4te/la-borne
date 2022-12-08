import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Chart from "react-apexcharts";
import DeficitChart from "./charts/DeficitChart";
import GeographyChart from "./charts/GeographyChart";

const Dataviz = ({
    handleChangeView
}) => {
    const fakeData = [
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

    ]
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
    let label = ["0 - 10 000 €", "10 000 € - 100 000 €", "100 000 € - 500 000 €", "500 000 € - 900 000 €", "900 000 € - 1 000 000 €", "> 1 000 000 €"];

    const [isLoading, setIsLoading] = useState(true);
    const [genresData, setGenresData] = useState([]);
    const [budgetsData, setBudgetsData] = useState([]);
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
        labels: label
    }


    const series = [
        {
            name: "Genres",
            data: genresData
        }
    ]

    const seriesDonut = budgetsData

    const makeDataBudgets = () => {
        console.log("makeDataBudgets");
        let res = [0, 0, 0, 0, 0, 0];

        fakeData.forEach(fd => { // On itere la liste des données
            console.log(fd.budget);
            if (fd.budget === 0 && fd.budget < 10000) {
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

        console.log("budget : ", res);
        setBudgetsData([...res]);
        setIsLoading(false)
    }
    const makeDataGenres = () => {
        let res = [];

        fakeData.forEach(fd => { // On itere la liste des données
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

        console.log(res);
        setGenresData([...res]);
    }

    const makeDataDeficit = () => {
        
    }

    useEffect(() => {
        makeDataGenres()
        makeDataBudgets()
    }, [])

    return (
        <div style={{ color: 'black' }}>
            <h1>Budgets déficit: JAUGE</h1>
            <DeficitChart/>
            <h1>Genres: TREEMAP</h1>
            <Chart
                type="treemap"
                options={options}
                series={series}
                width="500"
            />
            <h1>Budget: DONUT</h1>
            {
                !isLoading &&
                <Chart
                    type="donut"
                    options={optionsBudget}
                    series={seriesDonut}
                    width="500"
                />
            }
            <h1>Pays: MAP</h1>
            <GeographyChart/>
            
        </div>
    )
}

export default Dataviz;
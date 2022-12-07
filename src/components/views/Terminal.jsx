import React, { useState, useEffect } from "react";
import { getFilms } from "../../api/getFilms";
import { getFilmById } from "../../api/getFilmById";
import "keen-slider/keen-slider.min.css";
import { TerminalGallery } from "../Terminal/TerminalGallery";
import arrow from "../../assets/arrow.svg";
import { TerminalProfil } from "../Terminal/TerminalProfil";
import { PlaceTicket } from "../Ticket/PlaceTicket";

const Terminal = ({ handleChangeView }) => {
  const [isLoading, setIsLoading] = useState(true); // popular | top_rated
  const [page, setPage] = useState(1); // popular | top_rated
  const [requestType, setRequestType] = useState("top_rated"); // popular | top_rated
  const [selectedButtonFilter, setSelectedButtonFilter] = useState("popular"); // popular | top_rated
  const [filmsData, setFilmsData] = useState(); // popular | top_rated
  const [selectedFilm, setSelectedFilm] = useState(null); // utilisé pour stocker le film selectionné

  const buttonsFilter = [
    {
      value: "popular",
      text: "Les plus populaires",
    },
    {
      value: "top_rated",
      text: "Les mieux notés",
    },
    {
      value: "search",
      text: "Recherche par nom...",
    },
  ];

  async function fetchOneFilm(id) {
    setIsLoading(true);
    const film = await getFilmById(id);
    setSelectedFilm(film);
    setIsLoading(false);
  }

  async function fetchFilms() {
    setIsLoading(true);
    const films = await getFilms(requestType, page);
    setFilmsData(films);
    setIsLoading(false);
    console.log(films);
  }

  useEffect(() => {
    console.log(selectedFilm);
  }, [selectedFilm]);

  useEffect(() => {
    fetchFilms();
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-border-left">
        {selectedFilm === null ? (
          <>
            <div className="terminal-buttons-filter">
              {buttonsFilter.map((buttonFilter, i) => (
                <button
                  value={buttonFilter.value}
                  className={
                    selectedButtonFilter === buttonFilter.value
                      ? "button-filter active"
                      : "button-filter"
                  }
                  key={i}
                >
                  {buttonFilter.text}
                </button>
              ))}
            </div>
            <TerminalGallery
              isLoading={isLoading}
              filmsData={filmsData}
              onClick={fetchOneFilm}
            />
          </>
        ) : (
          <TerminalProfil
            isLoading={isLoading}
            selectedFilm={selectedFilm}
            setSelectedFilm={setSelectedFilm}
          />
        )}
      </div>
      <div className="terminal-border-right">
        <div className="terminal-right-ticket">
          <span>Récupérer votre ticket</span>
          <div>
            <img src={arrow} />
            <img src={arrow} />
            <img src={arrow} />
          </div>
          <div className="terminal-ticket-box"></div>
          <div className="ticket-test">
            <PlaceTicket name="Test" />
          </div>
        </div>
        <div className="terminal-right-title">
          <h1>La borne</h1>
          <p>831,946 films</p>
        </div>
      </div>
    </div>
  );
};

export default Terminal;

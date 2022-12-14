import React, { useState } from "react";
import star from "../../assets/star.svg";
import clock from "../../assets/clock.svg";
import chevronLeft from "../../assets/buttons/chevronLeft.svg";

export const TerminalProfil = ({
  isLoading,
  selectedFilm,
  setSelectedFilm,
  printTicket,
}) => {
  const [onPrint, setOnPrint] = useState(false);

  const printAction = () => {
    setOnPrint(true);
    setTimeout(() => {
      setOnPrint(false);
    },5000);
    printTicket(true);
  }

  return (
    <div className="terminal-film-profil">
      {isLoading ? (
        <span>Chargment...</span>
      ) : (
        <>
          {onPrint ? (
            <div className="film-profil-print">
              <p>En cours d'impression...</p>
            </div>
          ) : (
            <>
              <div className="film-profil-head">
                <div>
                  <button
                    className="button-retour"
                    onClick={() => setSelectedFilm(null)}
                  >
                    <img width={30} src={chevronLeft} />
                    <span>Retour</span>
                  </button>
                </div>
              </div>
              <div className="film-profil-container">
                <div className="film-profil-poster">
                  <img
                    src={`https://image.tmdb.org/t/p/original${selectedFilm.poster_path}`}
                    alt={selectedFilm.poster_path}
                  />
                </div>
                <div className="film-profil-content">
                  <div className="film-profil-content-head">
                    <div>
                      <h2>{selectedFilm.title}</h2>
                    </div>
                    <div className="film-profil-head-line">
                      <img src={clock} />
                      <p>{selectedFilm.runtime}</p>
                    </div>
                    <div className="film-profil-head-line gold">
                      <img src={star} />
                      <p>
                        {selectedFilm.vote_average +
                          " / 10 (" +
                          selectedFilm.vote_count +
                          " votes)"}
                      </p>
                    </div>
                  </div>
                  <div className="film-profil-categories">
                    {selectedFilm.genres.map((item, key) => (
                      <span key={key}>{item.name}</span>
                    ))}
                  </div>
                  <div className="film-profil-synopsis">
                    <h3>Synopsis</h3>
                    <p>{selectedFilm.overview}</p>
                  </div>
                  <div className="film-profil-ticket">
                    <button className="general-button primary-button" onClick={printAction}>
                      Acheter mon Ticket
                    </button>
                  </div>
                </div>
              </div>
              <div className="film-profil-banner">
                <img
                  src={`https://image.tmdb.org/t/p/original${selectedFilm.backdrop_path}`}
                  alt={selectedFilm.backdrop_path}
                />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

import React from "react";
import star from "../../assets/star.svg";
import clock from "../../assets/clock.svg";

export const TerminalProfil = ({ isLoading, selectedFilm, setSelectedFilm, printTicket }) => {
  return (
    <div className="terminal-film-profil">
      {isLoading ? (
        <span>Chargment...</span>
      ) : (
        <>
          <div className="film-profil-head">
            <button onClick={() => setSelectedFilm(null)}>
              Revenir à la liste
            </button>
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
                <button onClick={() => printTicket(true)}>Acheter mon Ticket</button>
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
    </div>
  );
};

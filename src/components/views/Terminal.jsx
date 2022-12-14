import React, { useState, useEffect } from "react";
import { getFilms } from "../../api/getFilms";
import { getFilmById } from "../../api/getFilmById";
import "keen-slider/keen-slider.min.css";
import { TerminalGallery } from "../Terminal/TerminalGallery";
import arrow from "../../assets/arrow.svg";
import { TerminalProfil } from "../Terminal/TerminalProfil";
import { PlaceTicket } from "../Ticket/PlaceTicket";
import { addFilmHistory } from "../../store/actions/actionsTypes";
import { useDispatch, useSelector } from "react-redux";
import cup from "../../assets/buttons/cup.svg";
import glass from "../../assets/buttons/glass.svg";
import star from "../../assets/buttons/star.svg";
import ticket from "../../assets/buttons/ticket.svg";
import printersound from "../../assets/sounds/printer.mp3";
import { getFilmByName } from "../../api/getFilmByName";

const Terminal = ({ handleChangeView }) => {
  const [isLoading, setIsLoading] = useState(true); // popular | top_rated
  const [page, setPage] = useState(1); // popular | top_rated
  const [requestType, setRequestType] = useState("top_rated"); // popular | top_rated
  const [selectedButtonFilter, setSelectedButtonFilter] = useState("popular"); // popular | top_rated
  const [filmsData, setFilmsData] = useState(); // popular | top_rated
  const [selectedFilm, setSelectedFilm] = useState(null); // utilisé pour stocker le film selectionné
  const [ticketStatus, setTicketStatus] = useState(false); // savoir si le ticket est imprimé
  const [isOnMenu, setIsOnMenu] = useState(true); // savoir si nous sommes sur le menu principale
  const audioPrinter = new Audio(printersound);
  const dispatch = useDispatch();

  const { filmHistoric } = useSelector((state) => state.playerReducer);


  const buttonsFilter = [
    {
      value: "popular",
      text: "Les plus populaires",
      icon: cup,
    },
    {
      value: "top_rated",
      text: "Les mieux notés",
      icon: star,
    },
    {
      value: "search",
      text: "Recherche par nom...",
      icon: glass,
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

  async function fetchFilmsByName(event) {
    event.preventDefault();
    setIsLoading(true);
    const films = await getFilmByName(event.target.children[0].value);
    setFilmsData(films);
    setIsLoading(false);
  }

  useEffect(() => {
    console.log(selectedFilm);
  }, [selectedFilm]);

  useEffect(() => {
    switch (selectedButtonFilter) {
      case "popular":
        setRequestType("popular");
        break;
      case "top_rated":
        setRequestType("top_rated");
        break;
      case "search":
        console.log("search");
        break;
    }
  }, [selectedButtonFilter]);

  useEffect(() => {
    console.log("rerequest");
    fetchFilms();
  }, [requestType]);

  useEffect(() => {
    fetchFilms();
  }, []);


  //si le ticket est true on l'ajoute
  const printTicket = (value) => {
    if (ticketStatus === false) {
      setTicketStatus(true);
      audioPrinter.volume = 0.6;
      audioPrinter.play();
      dispatch(addFilmHistory(selectedFilm));
    }
  };


  return (
    <div className="terminal">
      <div className="terminal-border-left">
        {selectedFilm === null ? (
          <>
            {isOnMenu ? (
              <div className="buttons-menu">
                <button className='general-button primary-button' onClick={() => setIsOnMenu(false)}>
                  <span style={{ verticalAlign: "middle" }}>Acheter un ticket</span>
                  <img src={ticket} style={{ rotate: "-20deg", marginLeft: 10, width: "30px", verticalAlign: "middle" }} />
                </button>
                {
                  filmHistoric.length > 0 &&
                  <button className='general-button secondary-button' onClick={() => handleChangeView("dataviz")}>
                    Statistiques de vos films
                  </button>
                }
              </div>
            ) : (
              <>
                <div className="terminal-buttons-filter">
                  {buttonsFilter.map((buttonFilter, i) => (
                    <button
                      onClick={() =>
                        setSelectedButtonFilter(buttonFilter.value)
                      }
                      value={buttonFilter.value}
                      className={
                        selectedButtonFilter === buttonFilter.value
                          ? "button-filter active"
                          : "button-filter"
                      }
                      key={i}
                    >
                      <span>{buttonFilter.text}</span>
                      <img src={buttonFilter.icon} alt={buttonFilter.icon} />
                    </button>
                  ))}
                  {selectedButtonFilter === "search" && (
                    <form onSubmit={(e) => fetchFilmsByName(e)}>
                      <input
                        type="text"
                        onChange={(e) => console.log(e.target.value)}
                      />
                    </form>
                  )}
                </div>
                <TerminalGallery
                  isLoading={isLoading}
                  filmsData={filmsData}
                  onClick={fetchOneFilm}
                />
              </>
            )}
          </>
        ) : (
          <TerminalProfil
            isLoading={isLoading}
            selectedFilm={selectedFilm}
            setSelectedFilm={setSelectedFilm}
            printTicket={printTicket}
          />
        )}
      </div>
      <div className="terminal-border-right">
        <div className="terminal-right-ticket">
          <span>Récupérez votre ticket</span>
          <div>
            <img src={arrow} />
            <img src={arrow} />
            <img src={arrow} />
          </div>
          <div className="terminal-ticket">
            <div className="terminal-ticket-box"></div>
            <div
              onClick={() => handleChangeView("theater")}
              className={`terminal-ticket-container ${ticketStatus && "on"}`}
            >
              {(selectedFilm || ticketStatus === true) && (
                <PlaceTicket
                  name={selectedFilm ? selectedFilm.title : "NO FILMS"}
                />
              )}
            </div>
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

import React from "react";
import { useKeenSlider } from "keen-slider/react";

export const TerminalGallery = ({ isLoading, filmsData, onClick }) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      origin: "center",
      perView: 3,
      spacing: 44,
    },
  });

  return (
    <div className="movie-cards">
      {isLoading ? (
        <span>Chargement...</span>
      ) : (
        <>
          <div ref={sliderRef} className="keen-slider">
            {filmsData.results.map((movie, i) => (
              <div
                className={"keen-slider__slide movie-poster number-slide" + i}
                key={i}
                onClick={() => onClick(movie.id)}
              >
                <div className="movie-poster-image">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.poster_path}
                  />
                </div>
                <img
                  className="image-blur"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.poster_path}
                />
                <div className="movie-title">{movie.title}</div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

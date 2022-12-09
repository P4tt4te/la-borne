import React from "react";
import { useKeenSlider } from "keen-slider/react";
import Chart from "react-apexcharts";
import DeficitChart from "./charts/DeficitChart";
import GeographyChart from "./charts/GeographyChart";
import ReviewsChart from "./charts/ReviewsChart";

export const DatavizSlide = ({
  isLoading,
  optionsAnnees,
  seriesAnnees,
  reviewsData,
  deficitData,
  options,
  series,
  optionsBudget,
  seriesBudgets,
  geoData
}) => {
  const [sliderRef] = useKeenSlider({
    slides: {
      origin: "center",
      perView: 1,
      //   spacing: 44,
    },
  });

  return (
    <div className="dataviz-slide">
      {
        isLoading ? (
          <span>Chargement...</span>
        ) : (
          <>
            <div ref={sliderRef} className="keen-slider">
              <div className={"keen-slider__slide"}>
                <h1>Années: DONUT</h1>
                <Chart
                  type="donut"
                  options={optionsAnnees}
                  series={seriesAnnees}
                  width="500"
                />
              </div>
              <div className={"keen-slider__slide"}>
                <h1>Reviews: JAUGE</h1>
                <ReviewsChart reviewsData={reviewsData} />
              </div>
              <div className={"keen-slider__slide"}>
                <h1>Budgets déficit: JAUGE</h1>
                <DeficitChart deficitData={deficitData} />
              </div>
              <div className={"keen-slider__slide"}>
                <h1>Genres: TREEMAP</h1>
                <Chart
                  type="treemap"
                  options={options}
                  series={series}
                  width="500"
                />
              </div>
              <div className={"keen-slider__slide"}>
                <h1>Budget: DONUT</h1>
                <Chart
                  type="donut"
                  options={optionsBudget}
                  series={seriesBudgets}
                  width="500"
                />
              </div>
              <div className={"keen-slider__slide"}>
                <h1>Pays: MAP</h1>
                <GeographyChart geoData={geoData} />
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

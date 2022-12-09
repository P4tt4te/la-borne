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
                <div className="chart-style chart-genres">
                  <h1>Vos genres préférés</h1>
                  <Chart
                    type="treemap"
                    options={options}
                    series={series}
                    width="800"
                  />
                </div>
              </div>
              <div className={"keen-slider__slide"}>
                <div className="chart-style chart-annees">
                  <h1>Vos années de prédilection</h1>
                  <Chart
                    type="donut"
                    options={optionsAnnees}
                    series={seriesAnnees}
                    width="700"
                  />
                </div>
              </div>
              <div className={"keen-slider__slide"}>
                <div className="chart-style chart-reviews">
                  <h1>Reviews des spectateurs</h1>
                  <ReviewsChart reviewsData={reviewsData} />
                </div>
              </div>
              <div className={"keen-slider__slide"}>
                <div className="chart-style chart-reviews">
                  <h1>Déficit</h1>
                  <DeficitChart deficitData={deficitData} />
                </div>
              </div>

              <div className={"keen-slider__slide"}>
                <div className="chart-style chart-budget">
                  <h1>Les budgets</h1>
                  <Chart
                    type="donut"
                    options={optionsBudget}
                    series={seriesBudgets}
                    width="700"
                  />
                </div>
              </div>
              <div className={"keen-slider__slide"}>
                <div className="chart-style chart-geo">
                  <h1>Les pays</h1>
                  <GeographyChart geoData={geoData} />
                </div>
              </div>
            </div>
          </>
        )
      }
    </div>
  );
};

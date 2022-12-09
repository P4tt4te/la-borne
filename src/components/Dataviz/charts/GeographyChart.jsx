import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

export const data = [
    ["Country", "Popularity"],
    ["Germany", 0],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["AU", 700],
];

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

export const options = {
    // region: "002", // Africa
    colorAxis: { colors: colors },
    backgroundColor: "#0D0D0F",
    datalessRegionColor: "white",
    defaultColor: "#f5f5f5",
  };

const GeographyChart = ({ geoData }) => {

    return (
        <Chart
            chartEvents={[
                {
                    eventName: "select",
                    callback: ({ chartWrapper }) => {
                        const chart = chartWrapper.getChart();
                        const selection = chart.getSelection();
                        if (selection.length === 0) return;
                        const region = data[selection[0].row + 1];
                        console.log("Selected : " + region);
                    },
                },
            ]}
            chartType="GeoChart"
            width="100%"
            height="400px"
            data={geoData}
            options={options}
        />
    )
}

export default GeographyChart;
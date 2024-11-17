import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

const XAXISRANGE = 777600000;
let lastDate = new Date().getTime();
let data = generateInitialData();

// Generate initial data
function generateInitialData() {
    const series = [];
    let baseVal = lastDate - XAXISRANGE;
    for (let i = 0; i < 10; i++) {
        series.push([baseVal, Math.floor(Math.random() * (90 - 10 + 1)) + 10]);
        baseVal += 86400000; // Increment by one day
    }
    return series;
}

// Function to get new series data
function getNewSeries(baseval, { min, max }) {
    const newDate = baseval + 86400000; // Increment by one day
    const newY = Math.floor(Math.random() * (max - min + 1)) + min;
    data.push([newDate, newY]);
    lastDate = newDate;

    if (data.length > 10) {
        data.shift();
    }
}

const MonthChart = () => {
    const [series, setSeries] = useState([{ data: data.slice() }]);

    const [options] = useState({
        chart: {
            id: "realtime",
            height: 350,
            type: "line",
            animations: {
                enabled: true,
                easing: "linear",
                dynamicAnimation: {
                    speed: 1000,
                },
            },
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        title: {
            text: "Dynamic Updating Chart",
            align: "left",
        },
        markers: {
            size: 0,
        },
        xaxis: {
            type: "datetime",
            range: XAXISRANGE,
        },
        yaxis: {
            max: 100,
        },
        legend: {
            show: false,
        },
    });

    // Dynamic updating using setInterval
    useEffect(() => {
        const interval = setInterval(() => {
            getNewSeries(lastDate, { min: 10, max: 90 });
            setSeries([{ data: data.slice() }]); // Update the series state

            // Execute ApexCharts update (for external sync, if required)
            ApexCharts.exec("realtime", "updateSeries", [{ data }]);
        }, 1000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={options} series={series} type="line" height={350} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default MonthChart;

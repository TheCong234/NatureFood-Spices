import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const TopProductChart = () => {
    const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#546E7A", "#26a69a", "#D10CE8"];

    const [series] = useState([
        {
            data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
    ]);

    const options = {
        chart: {
            height: 350,
            type: "bar",
            width: "100%",
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                },
            },
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: "50%",
                distributed: true,
                width: "100%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: [["Giấm"], ["Giấm"], ["Giấm"], ["Giấm"], ["Giấm"], ["Giấm"], ["Giấm"], ["Giấm"]],
            labels: {
                style: {
                    colors: colors,
                    fontSize: "12px",
                },
            },
        },
    };

    return (
        <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
            {" "}
            <div id="chart">
                <ReactApexChart options={options} series={series} type="bar" height={340} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default TopProductChart;

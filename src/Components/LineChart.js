import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function LineChart() {
    // This is the x-axis values - Time
    const labels = ["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00"];

    const data = {
        labels: labels,
        datasets: [
            {
                label: "Total Consumption Chart",
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                // This is the y-axis values
                data: [0.1, 0.52, 0.754, 0.25, 0.245, 0.979, 0.747, 0.313, 0.1447, 0.44],
                tension: 0
            },
        ],
    };

    return (
        <>
            <div className="mb-5">
                <Line data={data} />
            </div>
        </>
    );
}

export default LineChart;
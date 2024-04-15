import styles from "./PieChart.module.css"
import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS,
    ArceElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

ChartJS.register(
    CategoryScale,
    ArceElement,
    Tooltip,
    Legend
)

export default function PieChart() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState({})

    useEffect(() => {
        setChartData({
            labels: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Sales $',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: 'rgb(53, 162, 235',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRation: false,
            responsive: true
        })
    }, [])

    return(
        <div>
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </div>
    )
}
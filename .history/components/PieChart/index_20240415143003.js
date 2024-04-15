import styles from "./PieChart.module.css"
import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
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
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [10, 30, 14, 5, 12, 25, 17],
                    borderColor: [
                        'rgba(255, 162, 235, 0.4)',
                        'rgba(74, 162, 235, 0.4)',
                        'rgba(255, 162, 25, 0.4)',
                        'rgba(167, 23, 235, 0.4)',
                        'rgba(12, 46, 25, 0.4)',
                        'rgba(255, 162, 95, 0.4)'
                    ],
                    backgroundColor: [
                        'rgba(255, 162, 235, 0.4)',
                        'rgba(74, 162, 235, 0.4)',
                        'rgba(255, 162, 25, 0.4)',
                        'rgba(167, 23, 235, 0.4)',
                        'rgba(12, 46, 25, 0.4)',
                        'rgba(255, 162, 95, 0.4)'
                    ]
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
            <Pie data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </div>
    )
}
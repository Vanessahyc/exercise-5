import styles from "./VerticalBar.module.css"
import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

chartJS.register(
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function VerticalBar() {

    const [chartData, setChartData] = useState({
        datasets: []
    })

    const [chartOption, setChartOptions] = useState({})

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
    }, [])

    return(
        <>
        </>
    )
}
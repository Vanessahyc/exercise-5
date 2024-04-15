import styles from "./VerticalBar.module.css"
import { Bar } from "react-chartjs-2"

import {
    Chart as chartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from "react"

chartJS.register(
    Chart as chartJS,
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

    return(
        <>
        </>
    )
}
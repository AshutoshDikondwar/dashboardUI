import React from 'react'
import './Chart.css'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement } from 'chart.js'
import { Bar, Doughnut } from 'react-chartjs-2'
ChartJS.register(
    BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement
)

const Chart = () => {
    const arcData = {
        labels: ['old customer', 'new customer', 'visitors'],
        datasets: [
            {
                data: [2, 3, 4],
                backgroundColor: ['rgb(130,26,240)', 'rgb(6,35,246)', 'gray']

            }
        ],

    }
    const arcOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        offset: [30, 20, 0],

    }

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                data: [60, 40, 90, 80, 85, 30, 70, 95, 90, 80, 75, 83],
                hoverBackgroundColor: '#8d1cd9',
                color: 'white',
                label: 'Earning',
                borderColor: 'white', 
                borderWidth: 1,
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                display: true,
                grid: {
                    display: false,
                },
                ticks: {
                    color: 'white'
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },

        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        },
        elements: {
            bar: {
                backgroundColor: '#695acdbb',
                borderRadius: 10,
                borderSkipped: 'bottom'
            }
        }
    }
    return (
        <div className='middle'>
            <div className='mid_chart'>
                <div className='bar_chart'>
                    <div className='top_chart_info'>
                        <h3>Overview</h3>
                        <div style={{ color: '#bcb19ea9' }}>Quantity</div>
                    </div>
                    <div style={{ color: '#bcb19ea9' }}>Monthly Earning</div>
                    <div className='bar_graph'>
                        <Bar data={data} options={options}></Bar>
                    </div>
                </div>

            </div>
            <div className='dougnut'>
                <div>
                    <h3>Customers</h3>
                    <div style={{ color: '#bcb19ea9' }}>Customers that buy products</div>
                    <span><span className='bolddata'>65%</span> total new customer</span>
                </div>
                <div className='dough'>
                    <Doughnut data={arcData} options={arcOptions} />
                </div>
            </div>
        </div>
    )
}

export default Chart
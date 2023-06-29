
<template>
    <main>
        <div class="container">
            <div class="row pt-4 justify-content-around">
                <div class="col-md-5 d-flex justify-content-around shadow p-3 mb-5 bg-body-tertiary rounded">
                    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />

                </div>
                <div class="col-md-5 d-flex justify-content-around shadow p-3 mb-5 bg-body-tertiary rounded">
                    <Bubble id="my-chart-id" :options="chartOptions" :data="datasetsB"></Bubble>
                </div>
            </div>
            <div class="row pt-4 d-flex justify-content-around">
                <div class="col-md-5 d-flex justify-content-around shadow p-3 mb-5 bg-body-tertiary rounded ">
                    <Radar  id="my-chart-id" :options="chartOptions" :data="datasetA" ></Radar>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import { Bar, Bubble, Radar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, RadialLinearScale, LineElement, Filler, } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, RadialLinearScale, LineElement, Filler,)

export default {
    name: 'BarChart',
    components: { Bar, Bubble,Radar },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March'],
                datasets: [{
                    data: [40, 20, 12], backgroundColor: ["rgba(255, 99, 132, 0.5)", "rgba(54, 162, 235, 0.5)", "rgba(75, 192, 192, 0.5)"],
                    borderColor: "#36495d"
                }]
            },
            chartOptions: {
                responsive: true
            },
            datasetsB: {

                label: 'Data One',
                datasets: [{
                    backgroundColor: '#f87979',
                    data: [
                        {
                            x: 20,
                            y: 25,
                            r: 5
                        },
                        {
                            x: 40,
                            y: 10,
                            r: 10
                        },
                        {
                            x: 30,
                            y: 22,
                            r: 30
                        }
                    ]
                }]
                ,

            },
            datasetA: {
                labels: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing',
                    'Coding',
                    'Cycling',
                    'Running'
                ],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(179,181,198,0.2)',
                        borderColor: 'rgba(179,181,198,1)',
                        pointBackgroundColor: 'rgba(179,181,198,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [65, 59, 90, 81, 56, 55, 40]
                    },
                    {
                        label: 'My Second dataset',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        pointBackgroundColor: 'rgba(255,99,132,1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(255,99,132,1)',
                        data: [28, 48, 40, 19, 96, 27, 100]
                    }
                ]
            }
        }
    }
}
</script>
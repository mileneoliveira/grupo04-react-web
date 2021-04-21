import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
// import './style.css'

const ChartJanta = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        let nome1 = ['Arroz', 'Feijão', 'Frango', 'Alface'];
        let quantidade1 = [145, 225, 155, 55];
        setChartData({
            labels: nome1,
            datasets: [
                {
                    label: 'Grafico geral',
                    data: quantidade1,
                    backgroundColor:
                        '#78F118', 

                }
            ]
        });
    }
    useEffect(() => {
        chart()
    }, [])
    return(
        <div className="divChart">
            <h1>Jantar - Nutrientes</h1>
            <div>
               <Doughnut data={chartData} /> 
            </div>
        </div>
    )
}

export default ChartJanta;
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
// import './style.css'

const ChartCafe = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        let nome1 = ['Café com açucar', 'Pão', 'Presunto', 'Queijo'];
        let quantidade1 = [50, 150, 10, 55];
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
            <h1>Café da manhã - Nutrientes</h1>
            <div>
               <Doughnut data={chartData} /> 
            </div>
        </div>
    )
}

export default ChartCafe;
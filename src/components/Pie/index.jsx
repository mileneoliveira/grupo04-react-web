import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
// import './style.css'

const ChartPie = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        let nome1 = ['Consumido', 'Livre'];
        let quantidade1 = [98, 84];
        setChartData({
            labels: nome1,
            datasets: [
                {
                    label: 'Grafico geral',
                    data: quantidade1,
                    backgroundColor:[
                        '#78F118',
                        '#4390C9'   

                    ] 

                }
            ]
        });
    }
    useEffect(() => {
        chart()
    }, [])
    return(
        <div className="divChart">
            <h1>Consumo diario</h1>
            <div>
               <Pie data={chartData} /> 
            </div>
        </div>
    )
}

export default ChartPie;
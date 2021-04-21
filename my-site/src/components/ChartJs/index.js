import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import './style.css'

const ChartJs = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        let nome1 = ['Peso inicial','Peso atual', 'Peso Alvo'];
        let quantidade1 = [98, 84, 70];
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
            <h1>GRAFICO GERAL</h1>
            <div>
               <Line data={chartData} /> 
            </div>
        </div>
    )
}

export default ChartJs;
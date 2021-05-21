import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api';
import moment from "moment";
// import './style.css'

const ChartJanta = () => {
    const [chartData, setChartData] = useState({});
    const dateNow = moment().format("YYYY-MM-DD");

    const [values, setValues] = useState([]);
    useEffect(() => {
        async function getValues() {
            
            const resposta = await api.get('dashboards/somaNutrientes', {
                params: {
                    data: ('2021-05-20'),
                    idUsuario: sessionStorage.getItem('idUsuario'),
                    idCategoriaRefeicao: 3
                }
            });
            setValues(resposta.data);

            console.log("Cafe:" + resposta.data);
        }
        getValues();
    }, []);


    const chart = () => {
        let nome1 = ['Colesterol', 'Carboidrato', 'Fibra', 'Calcio', 'Ferro', 'Sodio', 'Proteina'];
        let quantidade1 = [values.totalColesterol, values.totalCarboidrato, values.totalFibra, values.totalCalcio, values.totalFerro, values.totalSodio, values.totalProteina];
        setChartData({
            labels: nome1,
            datasets: [
                {
                    label: 'Janta - Nutrientes',
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
            <input id="date"  type="date" defaultValue={dateNow} />
            <div>
               <Doughnut data={chartData} /> 
            </div>
        </div>
    )
}

export default ChartJanta;
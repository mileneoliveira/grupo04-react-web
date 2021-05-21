import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api';
import moment from "moment";
// import './style.css'

const ChartCafe = () => {
    const [chartData, setChartData] = useState({});
    const [date, setDate] = useState('');
    const dateNow = moment().format("YYYY-MM-DD");

    const handleDate = (evt) => {
        const {value} = evt.target;
        const dateFormater = value.toString();
        setDate(dateFormater);
        console.log(dateFormater);
        chart();
    }

    const [values, setValues] = useState([]);
    useEffect(() => {
        const test = date ? date : dateNow
        
        async function getValues() {
            const resposta = await api.get('dashboards/somaNutrientes', {
                params: {
                    data: test,
                    idUsuario: sessionStorage.getItem('idUsuario'),
                    idCategoriaRefeicao: 1
                }
            });
            console.log(test);
            if(resposta.status == 404){
                return alert("SEU CORNO!!");
            }
            setValues(resposta.data);
            console.log(resposta.data);
            
            
        }
        chart();
        getValues();
        
    }, [date]);


    const chart = () => {
        let nome1 = ['Colesterol', 'Carboidrato', 'Fibra', 'Calcio', 'Ferro', 'Sodio', 'Proteina'];
        let quantidade1 = [values.totalColesterol, values.totalCarboidrato, values.totalFibra, values.totalCalcio, values.totalFerro, values.totalSodio, values.totalProteina];
        setChartData({
            labels: nome1,
            datasets: [
                {
                    label: 'Café da manhã - Nutrientes',
                    data: quantidade1,
                    backgroundColor:
                        '#78F118',

                }
            ]
        });
    }
   
    return (
        <div className="divChart">
            <h1>Café da manhã - Nutrientes</h1>
            <input id="date"  type="date" defaultValue={dateNow} onChange={handleDate}/>
            <div>
                <Doughnut data={chartData}/>
            </div>
        </div>
    )
}

export default ChartCafe;
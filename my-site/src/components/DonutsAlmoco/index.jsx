import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api';
import moment from "moment";
// import './style.css'

const ChartAlmoco = () => {
    const [chartData, setChartData] = useState({});
    const [date, setDate] = useState('');
    const dateNow = moment().format("YYYY-MM-DD");
    const [values, setValues] = useState([]);

    const handleDate = (evt) => {
        const { value } = evt.target;
        const dateFormater = value.toString();
        setDate(dateFormater);
        console.log(dateFormater);
    }

     function onSubmit(ev) {
        ev.preventDefault();

        const test = date ? date : dateNow

        const resposta = api.get('dashboards/somaNutrientes', {
            params: {
                data: test,
                idUsuario: sessionStorage.getItem('idUsuario'),
                idCategoriaRefeicao: 1
            }
        }).then((response) => {
            console.log(response.data);
            if(response.status == 200){
                setValues(response.data);
                chart();
            }
        })
        .catch((err) => {
                alert("DEU RUIM");
        })
    }

    // useEffect(() => {
    //     const test = date ? date : dateNow

    //     async function getValues() {
    //         const resposta = await api.get('dashboards/somaNutrientes', {
    //             params: {
    //                 data: test,
    //                 idUsuario: sessionStorage.getItem('idUsuario'),
    //                 idCategoriaRefeicao: 1
    //             }
    //         })
    //         console.log("salve");
    //         if(resposta.status == 404){
    //             return alert("IF!!");
    //         }
    //         else{
    //             return alert("ELSE!");
    //         }
    //         setValues(resposta.data);
    //         console.log(resposta.data);


    //     }
    //     chart();
    //     getValues();

    // }, [date]);

    const chart = () => {
        let nome1 = ['Colesterol', 'Carboidrato', 'Fibra', 'Calcio', 'Ferro', 'Sodio', 'Proteina'];
        let quantidade1 = [values.totalColesterol, values.totalCarboidrato, values.totalFibra, values.totalCalcio, values.totalFerro, values.totalSodio, values.totalProteina];
        setChartData({
            labels: nome1,
            datasets: [
                {
                    label: 'Jantar - Nutrientes',
                    data: quantidade1,
                    backgroundColor:
                        '#78F118',

                }
            ]
        });
    }

    return(
        <div className="divChart">
            <form className="form-data" onSubmit={onSubmit}>
                <input id="date" type="date" defaultValue={dateNow} onChange={handleDate} />
                <button>CLIQYEU AQYI</button>
            </form>
            <h1>Almoço - Nutrientes</h1>
            <div>
               <Doughnut data={chartData} /> 
            </div>
        </div>
    )
}

export default ChartAlmoco;
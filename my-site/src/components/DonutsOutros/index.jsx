import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api';
import moment from "moment";
import { useAuth } from "hooks/useAuth";
// import './style.css'

const ChartOutros = () => {
    const [chartData, setChartData] = useState({});
    const [date, setDate] = useState('');
    const dateNow = moment().format("YYYY-MM-DD");
    const [values, setValues] = useState([]);
    const { user } = useAuth();

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
                idUsuario: `${user.id}` ,
                idCategoriaRefeicao: 4
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

    const chart = () => {
        let nome1 = ['Colesterol', 'Carboidrato', 'Fibra', 'Calcio', 'Ferro', 'Sodio', 'Proteina'];
        let quantidade1 = [values.totalColesterol, values.totalCarboidrato, values.totalFibra, values.totalCalcio, values.totalFerro, values.totalSodio, values.totalProteina];
        setChartData({
            labels: nome1,
            datasets: [
                {
                    label: 'Lanches/Outros - Nutrientes',
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
                <button>CLIQUE AQUI</button>
            </form>
            <h1>Lanches/Outros - Nutrientes</h1>
            <div>
               <Doughnut data={chartData} /> 
            </div>
        </div>
    )
}

export default ChartOutros;
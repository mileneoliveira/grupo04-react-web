import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api';
import moment from "moment";
import { useAuth } from "hooks/useAuth";
import { notificationError, notificationSuccess } from "utils/notifications";
// import './style.css'

const ChartJanta = () => {
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
                idCategoriaRefeicao: 3
            }
        }).then((response) => {   
            console.log(response.data);
            if(response.status == 200){
                notificationSuccess("Sucesso", "Estamos carregando as informações!");
                setValues(response.data);
                chart();
            }
        })
        .catch((err) => {
            notificationError("Erro", "Não foi possivel obter as informações!");
        })
    }

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
            <form className="form-data-dash" onSubmit={onSubmit}>
                <input id="date" type="date" defaultValue={dateNow} onChange={handleDate} />
                <button>Buscar</button>
            </form>
            <h1>Jantar - Nutrientes</h1>
            <div>
               <Doughnut data={chartData} /> 
            </div>
        </div>
    )
}

export default ChartJanta;
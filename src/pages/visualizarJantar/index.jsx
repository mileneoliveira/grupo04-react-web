import React, { useEffect, useState, Component } from 'react';
import MoldeSide from '../../components/molde-sidebar/molde-sidebar';
import './style.css';
import moment from "moment";
import { useAuth } from "hooks/useAuth";

import api from '../../services/api';
import MoldeRefe from '../../components/molde-refeicao';


const VisualizarJantar = () => {
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

        const resposta = api.get('refeicoes-alimentos/refeicoes-dia', {
            params: {
                data: test,
                idUsuario: `${user.id}`,
                idTipo: 3
            }
        }).then((response) => {
            console.log(response.data);
            if(response.status == 200){
                setValues(response.data);
            }
        })
        .catch((err) => {
                alert("DEU RUIM");
        })
    }
    
    return (
        <>
           
            <div className="conteudo-historico-alimento">
            <MoldeSide />
                    
                    <div className="refeicao-historico-alimento">

                    <form className="form-data" onSubmit={onSubmit}>
                    <input id="date" type="date" defaultValue={dateNow} onChange={handleDate} />
                    <button>CLIQUE AQUI</button>
                    </form>
                    
                    <a href="visualizaralimentos" className="botao1-historico-alimento botao-padrao-alimento" >Café da manhã</a>

<a href="visualizaralmoco" className="botao2-historico-alimento botao-padrao-alimento">Almoço</a>

<a href="visualizarjantar" className="botao3-historico-alimento botao-padrao-alimento">Jantar</a>

<a href="visualizaroutros" className="botao4-historico-alimento botao-padrao-alimento">Lanches/Outros</a>
<div className="historico-refeicao">
                        <ul>
                    {values.map((alimento) => (
                        <li className="lista-de-alimentos">{alimento.nomeAlimento} | <b>Porção:</b> {alimento.porcaoAlimento} g</li>    
                    ))}
                    </ul>
                    </div>
                    </div>
            </div>

        </>

    )
}

export default VisualizarJantar;




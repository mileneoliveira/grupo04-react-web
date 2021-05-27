import React, { Component } from 'react';
import MoldeSide from '../../components/molde-sidebar/molde-sidebar';
import './style.css';

const VisualizarAlimentos = () => {

    
    return (
        <>
            <MoldeSide />
            <div className="conteudo-historico-alimento">
                <div className="container-historico-alimento">
                    <header className="teste-historico-alimento"><h1>Veja sua refeição!</h1></header>
                    <div className="refeicao-historico-alimento">

                        <a href="#" className="botao1-historico-alimento botao-padrao-alimento" >Café da manhã</a>

                        <a href="#" className="botao2-historico-alimento botao-padrao-alimento">Almoço</a>

                        <a href="#" className="botao3-historico-alimento botao-padrao-alimento">Janta</a>

                        <a href="#" className="botao4-historico-alimento botao-padrao-alimento">Lanches/Outros</a>

                        <div className="historico-refeicao">
                            <ul>
                                <li>Arroz</li>
                                <li>Batata</li>
                                <li>Carne</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default VisualizarAlimentos;




import React, { Component } from 'react';

import './style.css';

export default class VisualizarAlimentos extends Component {
    render() {

        return (

            <div>

                <div className="wrapper">
                    <div className="nav">
                        <div className="logo">
                            <img src="img/logo.svg" alt="" />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a className="botao-nav" href="">HOME</a></li>
                                <li><a className="botao-nav" href="">REFEIÇÃO</a></li>
                                <li><a className="botao-nav" href="">SAIR</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="conteudo">
                    <div className="container">
                        <header className="teste"><h1>Veja sua refeição!</h1></header>
                        <div className="refeicao">

                            <a href="#" className="botao1 botao-padrao" >Café da manhã</a>

                            <a href="#" className="botao2 botao-padrao">Almoço</a>

                            <a href="#" className="botao3 botao-padrao">Janta</a>

                            <a href="#" className="botao4 botao-padrao">Lanches/Outros</a>

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

            </div>

        )
    }
}
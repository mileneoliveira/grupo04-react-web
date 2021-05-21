import React, { Component } from 'react';

import './style.css';

export default class VisualizarAlimentos extends Component {
    render() {

        return (

            <div>

                <div className="wrapper-historico-alimento">
                    <div className="nav-historico-alimento">
                        <div className="logo-historico-alimento">
                            <img src="img/logo.svg" alt="" />
                        </div>
                        <div className="menu-historico-alimento">
                            <ul>
                                <li><a className="botao-nav-historico-alimento" href="">HOME</a></li>
                                <li><a className="botao-nav-historico-alimento" href="">REFEIÇÃO</a></li>
                                <li><a className="botao-nav-historico-alimento" href="">SAIR</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

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

            </div>

        )
    }

}




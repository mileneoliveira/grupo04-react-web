import React, { Component } from 'react';

import './style.css';

export default class ListaAlimentos extends Component {
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

                <div className="box">
                    <div className="container">
                        <div className="conteudo">
                            <div className="alimento">
                                <section className="informar-alimento">
                                    <h2 className="titulo-lista">Informe seu alimento</h2>
                                    <hr />
                                    <label for="">Nome do alimento:</label>
                                    <input type="text" id="" className="input-padrao" placeholder="Informe o nome do alimento" required />
                                    <button className="btn-adicionar">Adicionar</button>
                                    <img className="logo-box" src="img/logo.svg" alt="" />
                                </section>
                            </div>
                        </div>
                        <div className="conteudo-lista">
                            <div className="lista-alimento">
                                <div className="itens-lista">
                                    <h2 className="titulo-itens-alimento">Aqui estão seus alimentos</h2>
                                    <hr />
                                    <ul>
                                        <li>Arroz</li>
                                        <li>Batata</li>
                                        <li>Melancia</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

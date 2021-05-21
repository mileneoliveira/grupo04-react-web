import React, { Component } from 'react';

import './style.css';

export default class ListaAlimentos extends Component {
    render() {

        return (

            <div>

                <div className="wrapper-lista-alimentos">
                    <div className="nav-lista-alimentos">
                        <div className="logo-lista-alimentos">
                            <img src="img/logo.svg" alt="" />
                        </div>
                        <div className="menu-lista-alimentos">
                            <ul>
                                <li><a className="botao-nav-lista-alimentos" href="">HOME</a></li>
                                <li><a className="botao-nav-lista-alimentos" href="">REFEIÇÃO</a></li>
                                <li><a className="botao-nav-lista-alimentos" href="">SAIR</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="box-lista-alimentos">
                    <div className="container-lista-alimentos">
                        <div className="conteudo-lista-alimentos">
                            <div className="alimento-lista-alimentos">
                                <section className="informar-alimento-lista-alimentos">
                                    <h2 className="titulo-lista-lista-alimentos">Informe seu alimento</h2>
                                    <hr />
                                    <label for="">Nome do alimento:</label>
                                    <input type="text" id="" className="input-padrao-lista-alimentos" placeholder="Informe o nome do alimento" required />
                                    <button className="btn-adicionar-lista-alimentos">Adicionar</button>
                                    <img className="logo-box-lista-alimentos" src="img/logo.svg" alt="" />
                                </section>
                            </div>
                        </div>
                        <div className="conteudo-lista-lista-alimentos">
                            <div className="lista-alimento-lista-alimentos">
                                <div className="itens-lista-lista-alimentos">
                                    <h2 className="titulo-itens-alimento-lista-alimentos">Aqui estão seus alimentos</h2>
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


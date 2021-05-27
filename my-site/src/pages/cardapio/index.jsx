import React, { Component } from 'react';
import './style.css';

const Cardapio = () => {

        return (
            <>
                <input type="checkbox" id="check" />
                <label for="check">
                    <i class="fas fa-bars" id="btn-cardapio"></i>
                    <i class="fas fa-times" id="cancel"></i>
                </label>
                <div className="sidebar">
                    <header>Meu perfil</header>
                    <a href="perfil"><img src="./imgs/Rectangle 14.svg" alt="" className="foto_perfil" /></a>
                    <ul>
                        <li>

                        </li>
                        <li className="icones"><a href="perfil"><i className="fas fa-user-circle"></i>Perfil</a></li>
                        <li className="icones"><a href="dashboard"><i class="fas fa-qrcode"></i>Dashboard</a></li>
                        <li className="icones"><a href="cardapio"><i class="fas fa-plus"></i>Refeição</a></li>
                        <li className="icones"><a href="login"><i class="fas fa-power-off"></i>Desconectar</a></li>
                        <li className="icones"><a href="feed"><i class="fas fa-sync"></i>Recarregar</a></li>

                    </ul>
                    <img className="logo_sidebar" src="./imgs/logo.svg" alt="" />
                </div>

                <div className="conteudo">

                    <header className="header_feed">
                        <h1 className="titulo_pagina">Bem-vindo ao cardapio!</h1>

                    </header>

                    <section className="cardapio__conteudo">

                        <div className="cardapio__cafe itens">

                            <div className="img_titulo teste">
                                <img src="./imgs/coffee.svg" alt="" />
                                <p>Café da manhã</p>
                                <a href="../listaalimentos/"><i class="fas fa-plus"></i></a>
                            </div>
                            <p className="ver-refeicao"><a href="../visualizaralimentos/">Visualizar sua refeição</a></p>
                        </div>

                        <div className="cardapio__almoco itens">

                            <div className="img_titulo teste">

                                <img src="./imgs/beverage.svg" alt="" />
                                <p>Almoço</p>
                                <a href="../listaalimentos/"><i class="fas fa-plus"></i></a>
                            </div>
                            <p className="ver-refeicao"><a href="../visualizaralimentos/">Visualizar sua refeição</a></p>
                        </div>

                        <div className="cardapio__jantar itens">
                            <div className="img_titulo teste">
                                <img src="./imgs/prato(1).svg" alt="" />
                                <p>Jantar</p>
                                <a href="../listaalimentos/"><i class="fas fa-plus"></i></a>
                            </div>
                            <p className="ver-refeicao"><a href="../visualizaralimentos/">Visualizar sua refeição</a></p>
                        </div>

                        <div className="cardapio__lanches_outros itens ">
                            <div className="img_titulo teste">
                                <img src="./imgs/salad(1).svg" alt="" />
                                <p>Lanches/Outros</p>
                                <a href="../listaalimentos/"><i class="fas fa-plus"></i></a>
                            </div>
                            <p className="ver-refeicao"><a href="../visualizaralimentos/">Visualizar sua refeição</a></p>
                        </div>
                    </section>

                </div>

                <div className="componente">
                    <img src="./imgs/Component11.svg" alt="" />
                </div>

            </>
        )
    }

export default Cardapio;
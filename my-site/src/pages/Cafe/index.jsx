import React, { Component } from 'react';
import ChartCafe from '../../components/DonutsCafe';
import MoldePesquisa from '../../components/molde-barra-pesquisa';
import MoldeSide from '../../components/molde-sidebar/molde-sidebar';
import './style.css';


export default class Cafe extends Component {
    render() {
        return (
            <div>
                <div>
                <MoldeSide />
                </div>



                    <div className="conteudo">


                        <div className="container">

                            <section className="conteudo__dash">

                                <a href="dashboard" className="botao1" >Visão geral</a>

                                <a href="cafe" className="botao2 " >Café da manhã</a>

                                <a href="almoco" className="botao3">Almoço</a>

                                <a href="jantar" className="botao4">Janta</a>

                                <a href="#gerar" className="botao5">Gerar relatorio</a>


                                <div className="dashboard">
                                    <ChartCafe />
                                </div>


                            </section>




                        </div>






                    </div>

                    

            </div>
        )
    }
}

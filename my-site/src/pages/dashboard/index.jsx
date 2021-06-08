import React, { Component } from 'react';
import ChartJs from '../../components/ChartJs';
import MoldeData from '../../components/molde-data';
import MoldeSide from '../../components/molde-sidebar/molde-sidebar';
import './style.css';


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                <MoldeSide />
                </div>



                    <div className="conteudo">


                        <div className="container">

                            <section className="conteudo__dash">

                                <a href="cafe" className="botao2 " >Café da manhã</a>

                                <a href="almoco" className="botao3">Almoço</a>

                                <a href="janta" className="botao4">Janta</a>

                                <a href="janta" className="botao5">Lanches/Outros</a>

                                <a href="#gerar" className="botao6">Gerar relatorio</a>

                                <div className="dashboard">
                                    <ChartJs />
                                </div>


                            </section>




                        </div>






                    </div>

                    

            </div>
        )
    }
}

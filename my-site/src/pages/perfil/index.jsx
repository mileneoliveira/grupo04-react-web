import React, { Component } from 'react';
import ChartJs from '../../components/ChartJs';
import MoldePesquisa from '../../components/molde-barra-pesquisa';
import SimpleModal from '../../components/molde-perfil';
import MoldeSide from '../../components/molde-sidebar/molde-sidebar';
import ChartPie from '../../components/Pie';
import './style.css';


export default class Perfil extends Component {
    render() {
        return (
            <div>
                <MoldeSide />
                <SimpleModal />
                <div className="ChartDiv">
                    <ChartPie />
                </div>
            </div>
        )
    }
}
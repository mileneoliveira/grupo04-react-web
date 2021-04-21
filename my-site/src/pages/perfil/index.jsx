import React, { Component } from 'react';
import ChartJs from '../../components/ChartJs';
import MoldePesquisa from '../../components/molde-barra-pesquisa';
import MoldeSide from '../../components/molde-sidebar/molde-sidebar';
import ChartPie from '../../components/Pie';
import './style.css';


export default class Perfil extends Component {
    render() {
        return (
            <div>
                <MoldeSide />
                <MoldePesquisa />
                <div className="ChartDiv">
                    <ChartJs />
                    <ChartPie />
                </div>
            </div>
        )
    }
}
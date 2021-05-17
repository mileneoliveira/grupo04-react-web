import React from 'react';

import './style.css';

function MoldeSide() {
    return (

            /* sidebar */
        <div>
            <input type="checkbox" id="check" />
            <label for="check" className="Checa">
                <i className="fas fa-bars" id="btnF"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="sidebar">
                <header>Meu perfil</header>
                <a href="perfil"><img src="./imgs/Rectangle 14.svg" alt="" className="foto_perfil" /></a>
                <ul>
                    {/* <li><a href="#teste"><img src="./imgs/milene.svg" alt="" /></a></li> */}
                    <li><a href="perfil"><i className="fas fa-user-circle"></i>Perfil</a></li>
                    <li><a href="dashboard"><i className="fas fa-qrcode"></i>Dashboard</a></li>
                    <li><a href="cardapio"><i className="fas fa-plus"></i>Refeição</a></li>
                    <li><a href="login"><i className="fas fa-power-off"></i>Desconectar</a></li>
                    <li><a href="feed"><i className="fas fa-sync"></i>Recarregar</a></li>
                </ul>
                <img className="logo_sidebar" src="./imgs/logo.svg" alt="" />

            </div>

            </div>
        
    )
}

export default MoldeSide;
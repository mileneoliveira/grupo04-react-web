import React from 'react';

import './style.css';

function MoldeSide() {
    return (

            /* sidebar */
        <div>
            <input type="checkbox" id="check" />
            <label for="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
            <div className="sidebar">
                <header>Meu perfil</header>
                <ul>
                    <li><a href="#"><img src="./img/avatar.svg" alt="" /></a></li>
                    <li><a href="#"><i className="far fa-bell"></i>Notificação</a></li>
                    <li><a href="#"><i className="fas fa-qrcode"></i>Dashboard</a></li>
                    <li><a href="#"><i className="fas fa-plus"></i>Adicionar</a></li>
                    <li><a href="#"><i className="fas fa-power-off"></i>Desconectar</a></li>
                    <li><a href="#"><i className="fas fa-sync"></i>Recarregar</a></li>
                </ul>
            </div> 
            </div>
        
    )
}

export default MoldeSide;
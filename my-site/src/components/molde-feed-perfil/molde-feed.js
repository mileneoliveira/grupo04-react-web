import React, { useEffect, useState } from 'react';

import './style.css';


function Molde(props) {
    return (

        <div>
            {/* FEED */}

            <div className="feed">

                <header className="header_feed">
                    <input type="text" placeholder="O que comeu hoje?" />
                    <button className="Publico">Publicar</button>
                </header>

                <section className="perfil_feed">
                    <header className="header__perfl">
                        <div className="info_perfil">
                            <img src="./imgs/marcelo.svg" alt="" />
                            <ul>
                                <li>
                                    <p>{props.nome}</p>
                                </li>
                                <li>
                                    <p>{props.descricao}</p>
                                </li>
                            </ul>
                            <a href="#sob"><i class="fas fa-ellipsis-v"></i></a>
                        </div>

                    </header>

                    <img className="img_comida_feed" src="./imgs/comida-feed.svg" alt="" />

                    <footer className="footer__perfl">
                        <i className="far fa-thumbs-up fa-3x"></i>
                    </footer>
                </section>


            </div>
            <div className="componente-imagem">
                <img src="./imgs/Component11.svg" alt="" />
            </div>
        </div>

    )
}

export default Molde;
import React, { useEffect, useState } from 'react';

import './style.css';


function Molde(props) {
    return (

        <div>
            {/* FEED */}

            <div className="feed">

         
                <section className="perfil_feed">
                    <header className="header__perfl">
                        <div className="info_perfil">
                            <img src={props.imagemUsuario} alt="" />
                            <ul>
                                <li>
                                    <p>{props.nome}</p>
                                </li>
                                <li>
                                    <p>{props.descricao}</p>
                                </li>
                            </ul>
                            <a href="#sob"><i className="fas fa-ellipsis-v"></i></a>
                        </div>

                    </header>

                    <img className="img_comida_feed" src={props.imagem} alt="" />

                    <footer className="footer__perfl">
                     
                    </footer>
                </section>


            </div>
               
        </div>

    )
}

export default Molde;
import React from 'react';

import './style.css';


function Molde() {
    return (


        <div>
            {/* FEED */}

            <div className="feed">

                <header className="header_feed">
                <div className="icone2">
                    <input type="text" placeholder="O que você procura?" />
                    <i class="fas fa-search"></i>
                    </div>
                </header>

                <section className="perfil_feed">
                    <header className="header__perfl">
                        <div className="info_perfil">
                            <img src="./imgs/marcelo.svg" alt="" />
                            <ul>
                                <li>
                                    <p>Marcelo Whitehead</p>
                                </li>
                                <li>
                                    <p>Almoço</p>
                                </li>
                            </ul>
                            <a href="#sob"><i class="fas fa-ellipsis-v"></i></a>
                        </div>

                    </header>


                    <img class="img_comida_feed" src="./imgs/comida-feed.svg" alt="" />

                    <footer class="footer__perfl">
                        <i class="far fa-thumbs-up fa-3x"></i>
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
import React from 'react';

import './style.css';


function Molde() {
    return (

        
        <div>
           {/* FEED */}

            <div className="feed">

                <header className="header_feed">
                    <input type="text" placeholder="O que você procura?" />
                </header>

                <section className="perfil_feed">
                    <header className="header__perfl">

                        <img src="./img/foto2.jpg" alt="" />

                    </header>

                    <img className="img_comida_feed" src="./imgs/comida-feed.svg" alt="" />

                    <footer className="footer__perfl">

                    </footer>
                </section>
            </div>
        </div>

    )
}

export default Molde;
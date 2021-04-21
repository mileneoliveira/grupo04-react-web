import React from 'react';

import './style.css';


function MoldePesquisa() {
    return (
        <div>
            <div className="feed">
                <header className="header_feed">
                    <div className="icone2">
                    <input type="text" placeholder="O que você procura?" />
                    <i class="fas fa-search"></i>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default MoldePesquisa;
import React, { useEffect, useState } from 'react';

import './style.css';


function MoldeRefe(props) {
    return (
        <>
            <div className="historico-refeicao">
                <ul>
                    <li>{props.alimento} | <b>Porçao:</b> {props.porcaoAlimento}</li>
                </ul>
            </div>
        </>
    )
}

export default MoldeRefe;
import React, { useEffect, useState } from 'react';

import './style.css';


function MoldeRefe(props) {
    return (
        <>
            {/* <div className="historico-refeicao"> */}
                    <li>{props.alimento} | <b>Porçao:</b> {props.porcaoAlimento}</li>               
            {/* </div> */}
        </>
    )
}

export default MoldeRefe;
import React, { Component } from 'react';
import './style.css';

export default class Login extends Component {
    render() {
        return (

            <div className="container">

                <h1 className="logo"><img src="./imgs/logo.svg" alt="" /></h1>

                <div className="conteudo_login">

                    <form className="form_login">

                        <div className="login_redes">

                            <div className="redes">
                              
                                    <img src="./imgs/google-login.svg" alt="" />
                                     {/* <a className="texto-redes">Entrar com google</a> */}
                            </div>
                            <div className="redes">
                            <img src="./imgs/facebook-login.svg" alt="" />
                                    {/* <a className="texto-redes">Entrar com facebook</a>  */}

                            

                            </div>
                            <div classNome="texto-divisor">
                            <img  src="./imgs/texto-ou.svg" alt=""/>
                            </div>

                            <input type="text"/>



                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
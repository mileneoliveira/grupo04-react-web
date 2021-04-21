import React, { Component } from 'react';
import './style.css';

export default class Login extends Component {
    render() {
        return (

            <div className="container">

                <a href="/"><h1 className="logo"><img src="./imgs/logo.svg" alt="" /></h1></a>

                <div className="conteudo_login">

                    <div className="box_login">
                        <div className="login_redes">
                            <div className="redes">
                                <img src="./imgs/google-login.svg" alt="" />
                                <a href="#teste" className="texto-redes">Entrar com google</a>
                            </div>
                            <div className="redes">
                                <img src="./imgs/facebook-login.svg" alt="" />
                                <a href="#teste" className="texto-redes">Entrar com facebook</a>
                            </div>
                        </div>
                        {/* <center>
                            <img classNome="texto-divisor" src="./imgs/texto-ou.svg" alt="" />
                        </center> */}

                        <form>
                            <label >
                                <h2 className="p-email">Insira seu E-mail</h2>
                                <input type="text" class="input-login" placeholder="E-mail" />
                            </label>
                            <label >
                                <h2 className="p-email">Insira sua senha</h2>
                                <input type="text" class="input-login" placeholder="Senha" />
                            </label>
                            <a href="feed" className="buttom-login" type="submit">Iniciar sessão</a>
                        </form>
                        <div className="nao-tem">
                            <p>Não tem uma conta? Cadastre-se</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
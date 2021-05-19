import React, { Component } from 'react';
import './style.css';
import api from '../../services/api';
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = React.useState({
        email: "",
        senha: ""

    });
    const hist = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();


        api.post('/usuarios/login', values)
            .then((response) => {
                sessionStorage.setItem('idUsuario',response.data.idUsuario);
                sessionStorage.setItem('nome',response.data.nome);
                sessionStorage.setItem('email',response.data.email);
                hist.push('/feed')
            })
    }

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

                        <form onSubmit={onSubmit}>
                            <label htmlFor="email">
                                <h2 className="p-email">Insira seu E-mail</h2>
                                <input type="text" className="input-login" placeholder="E-mail" name="email" onChange={onChange}/>
                            </label>
                            <label htmlFor="">
                                <h2 className="p-email">Insira sua senha</h2>
                                <input type="text" className="input-login" placeholder="Senha" name="senha" onChange={onChange}/>
                            </label>
                            <button className="buttom-login">Iniciar sessão</button>
                            {/* <a href="feed" className="buttom-login" type="submit">Iniciar sessão</a> */}
                        </form>
                        <div className="nao-tem">
                            <p>Não tem uma conta? <a href="cadastro">Cadastre-se</a></p>
                        </div>

                    </div>
                </div>
            </div>
        )
    
}

export default Login;
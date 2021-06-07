import React, { Component } from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

const Cadastro = () => {
    const [values, setValues] = React.useState({
        nome: "",
        email: "",
        dataNascimento: "",
        senha: "",

    });
    const hist = useHistory();

    function onChange(ev) {
        const { name, value } = ev.target;

        setValues({ ...values, [name]: value });
    }

    function onSubmit(ev) {
        ev.preventDefault();

        api.post('/usuarios', values)
            .then((response) => {
                hist.push('/login')
            })
    }



        return (
            <div className="conteudo_cadastro">
                    <img className="celular-cadastro" src="./imgs/celular-cadastro.svg" alt="" />
                <h1 className="logo"><img src="./imgs/logo.svg" alt="" /></h1>


                <form className="form-cadastro" onSubmit={onSubmit}>

                    <section className="cadastro">

                        <h1 className="titulo_cadastro">Cadastro</h1>
                        <label htmlFor="nome">
                            <h3>Nome completo</h3>
                            <input type="text" className="input-padrao" placeholder="Nome completo" name="nome" onChange={onChange}/>
                        </label>

                        <label htmlFor="dataNascimento">
                            <h3>Data de nascimento</h3>
                            <input type="date" className="input-padrao" placeholder="Data de nascimento" name="dataNascimento" onChange={onChange}/>
                        </label>

                        <label htmlFor="email">
                            <h3>Email</h3>
                            <input type="text" className="input-padrao" placeholder="E-mail" name="email" onChange={onChange}/>
                        </label>
                        <label htmlFor="senha">
                            <h3>Senha</h3>
                            <input type="password" className="input-padrao" placeholder="Senha"  name="senha" onChange={onChange}/>
                        </label>

                        <label className="checkbox"> <input type="checkbox" />
                        Li e concordo com os <strong> <u>Termos de uso</u> </strong>
                        do Check
                    </label>

                        <p>
                            Se preferir, entre com uma rede social
                    </p>

                        <div className="imagens-buttom-cadastro">
                            <img src="./imgs/google-cadastro.svg" alt="" />
                            <img src="./imgs/facebook-cadastro.svg" alt="" />

                            <button className="buttom-cadastrar" >Cadastrar-se</button>

                        </div>
                       
                    </section>
                   
                    
                   
                  



                </form>



            </div>
        )
    
}

export default Cadastro;

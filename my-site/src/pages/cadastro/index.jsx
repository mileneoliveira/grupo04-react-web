import React, { Component } from 'react';
import './style.css';

export default class Cadastro extends Component {
    render() {
        return (
            <div className="conteudo_cadastro">

                <h1 className="logo"><img src="./imgs/logo.svg" alt="" /></h1>


                <form className="form-cadastro">

                    <section className="cadastro">

                        <h1 className="titulo_cadastro">Cadastro</h1>
                        <label htmlFor="sujo">
                            <h3>Nome completo</h3>
                            <input type="text" class="input-padrao" placeholder="Nome completo" />
                        </label>

                        <label htmlFor="teste">
                            <h3>Data de nascimento</h3>
                            <input type="date" class="input-padrao" placeholder="Data de nascimento" onfocus="(this.type='date')" onblur="(this.type='text')" />
                        </label>

                        <label htmlFor="teste2">
                            <h3>Email</h3>
                            <input type="text" class="input-padrao" placeholder="E-mail" />
                        </label>
                        <label htmlFor="test3">
                            <h3>Senha</h3>
                            <input type="text" class="input-padrao" placeholder="Senha" />

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

                            <a href="login" className="buttom-cadastrar" type="submit">Cadastrar-se</a>
                        </div>

                    </section>

                    <img className="celular-cadastro" src="./imgs/celular-cadastro.svg" alt="" />



                </form>



            </div>
        )
    }
}

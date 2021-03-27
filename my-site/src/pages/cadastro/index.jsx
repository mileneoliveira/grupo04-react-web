import React, { Component } from 'react';
import './style.css';

export default class Cadastro extends Component {
    render() {
        return (
            <div className="conteudo_cadastro">
                        
                <h1 className="logo"><img src="./imgs/logo.svg" alt=""/></h1>


                <form className="form-cadastro">

                    <section className="cadastro">

                    <h1 className="titulo_cadastro">Cadastro</h1>

                    <input type="text" class="input-padrao" placeholder="Nome completo" />

                    <input type="text" class="input-padrao" placeholder="CEP" />

                    <input type="text" class="input-padrao" placeholder="E-mail" />

                    <input type="text" class="input-padrao" placeholder="Senha" />

                    <label className="checkbox"> <input type="checkbox" />
                        Li e concordo com os <strong> <u>Termos de uso</u> </strong>
                        do Check
                    </label>
  
                    <p>
                    Se preferir, entre com uma rede social
                    </p>

                    <div className="imagens-buttom-cadastro">
                        <img src="./imgs/google-cadastro.svg" alt=""/>
                        <img src="./imgs/facebook-cadastro.svg" alt=""/>

                        <input className="buttom-cadastrar" type="submit" value="Cadastrar-se"/>
                    </div>

                  </section>
                 
                 <img className="celular-cadastro" src="./imgs/celular-cadastro.svg" alt=""/>
                 
                 

                </form>



            </div>
        )
    }
}

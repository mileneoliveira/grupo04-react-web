import React, { Component } from 'react';
import './styl.css'

export default class institucional extends Component {
    render() {
        return (
            <div>
                <section id="home">
                    <img className="Logo" src="./imgs/logo.svg" alt=""/>
                    <nav>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#sobre">Sobre nós</a></li>
                            <li><a href="#vantagens">Vantagens</a></li>
                            <li><a href="#equipe">Equipe</a></li>
                            <li><a href="#entrar"> <span className="myhealth">Entrar</span></a></li>
                        </ul>
                    </nav>
                    <div className="welcome-home">
                        <div className="welcome-text">
                        <p>Com o <span className="myhealth">My Health</span> você dará o primeira passo em direção a uma vida balanceada.</p>
                        <div className="botoes">
                        <a href="cadastro.html" className="btn">Crie sua conta</a>
                        <a href="#cadastro" className="btn">Acesse sua conta</a>
                        </div>
                        </div>
                        <div className="correndo">
                        <img src="./imgs/iconrun.svg" alt=""/>
                        </div>
    
                    </div>

                </section>
                
                <section id="sobre">
                    <img src="./imgs/meditar.svg" alt=""/>
                    <div className="sobre-text">
                    <p>Nós somos uma empresa que visa o seu <b>equilibrio</b> e <b>bem estar</b></p>
                    <p>Acompanhar sua <b>evolução</b> nunca foi tão fácil.</p>
                    <br/>
                    <a href="#cadastro" className="btn1">Crie sua conta</a>
                    </div>
                </section>

                <section id="vantagens">
                    <div className="vantagens-text">
                        <p>Saiba quais as vantagens de utilizar o <span className="myhealth">My Health</span> no seu dia a dia.</p>
                        <br/>
                    </div>
                    <div className="vantagens-passos">
                        <img src="./imgs/passo1.svg" alt=""/>
                        <img src="./imgs/passo2.svg" alt=""/>
                        <img src="./imgs/passo3.svg" alt=""/>
                        <img src="./imgs/passo4.svg" alt=""/>
                    </div>
                </section>

                <section id="equipe">
                    <div className="equipe-text">
                        <p>Conectamos a <b>tecnologia</b> ao <b>bem estar</b>, trabalhando juntos para garantir sua melhor experiência.</p>
                        <img src="./imgs/equipe.svg" alt=""/>
                    </div>
                    <br/>
                    <div className="fotos-equipe">
                        <div>
                        <img src="./imgs/luiza.svg" alt=""/> 
                         <p>Luiza Mazo</p>
                        </div>
                        <div>
                        <img src="./imgs/marcelo.svg" alt=""/>
                            <p>Marcelo Whitehead</p> 
                        </div>
                        <div>
                        <img src="./imgs/milene.svg" alt=""/>
                            <p>Milene Oliveira</p>
                        </div>
                        <div>   
                        <img src="./imgs/rapha.svg" alt=""/>
                        <p>Raphael Cassio</p>
                        </div>
                        <div>
                        <img src="./imgs/nata.svg" alt=""/>
                        <p>Natã Lino</p>
                        </div>
                        <div>    
                        <img src="./imgs/yuri.svg" alt=""/>  
                        <p>Yuri de Jesus</p>      
                        </div>
                    </div>
                </section>
                <footer>
                    <div className="endereço-footer">
                        <img src="./imgs/endereço.svg" alt=""/>
                        <div className="endereço-text">
                        <p className="text1">Estamos localizados no melhor endereço comercial da cidade</p>
                        <center>
                        <p className="text2">Hadock lobo 595, Cerqueira césar - 01414-001</p>
                        </center>
                    </div>
                    </div>
                    <div>
                        <center><h1>Acompanhe-nos em nossas redes sociais</h1></center>
                    </div>
                    <div className="links-uteis">
                        <div className="lista1">
                            <ul>
                            <p>Links uteis</p>
                            <li><a href="#teste">Sobre a empresa</a></li>
                            <li><a href="#teste">Vantagens</a></li>
                            <li><a href="#teste">Equipe</a></li>
                            </ul>
                        </div>
                        <div className="lista2">
                            <ul>
                            <p>Navegações</p>

                            <li><a href="#teste">Home</a></li>
                            <li><a href="#teste">Sobre nós</a></li>
                            <li><a href="#teste">Vantagens</a></li>
                            </ul>
                            <ul>
                            <li><a href="#teste">Quem somos</a></li>
                            <li><a href="#teste">Criar conta</a></li>
                            <li><a href="#teste">Fale conosco</a></li>
                            </ul>
                        </div>
                        <div className="redes-sociais">
                            <a href="#twiter"><img src="./imgs/twitter.svg" alt=""/></a>
                            <a href="#insta"><img src="./imgs/instagram.svg" alt=""/></a>
                            <a href="#link"><img src="./imgs/linkdin.svg" alt=""/></a>
                            <a href="#face"><img src="./imgs/facebook.svg" alt=""/></a>
                        </div>
                    </div>
                    <img className="logo-footer" src="./imgs/logo.svg" alt=""/>
                </footer>
            </div>
        )
    }
}
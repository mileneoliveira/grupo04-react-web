import React from "react";
import api from "services/api";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useSnack } from "hooks/useSnack";
import "./style.css";
import { notificationError } from "utils/notifications";
import { notificationSuccess } from "../../utils/notifications";

const Cardapio = () => {
  const { user } = useAuth();
  const { setSnack } = useSnack();
  const history = useHistory();

  const handleRefeicao = async (idRefeicao) => {
    const jsonRefeicao = {
      categoriaRefeicao: {
        idCategoriaRefeicao: idRefeicao,
      },
      usuario: {
        id: user.id,
      },
    };

    try {
      const { data } = await api.post("/refeicoes", jsonRefeicao);
      setSnack({ id: data });

      return notificationSuccess("Sucesso", "sua refeição foi cadastrada");
    } catch (error) {
      console.log(error);
      history.push("/cardapio");

      return notificationError(
        "Erro",
        "Não foi possivel fazer o cadastro da refeição"
      );
    }
  };

  return (
    <>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i className="fas fa-bars" id="btn-cardapio"></i>
        <i className="fas fa-times" id="cancel"></i>
      </label>
      <div className="sidebar">
        <header>Meu perfil</header>
        <a href="perfil">
          <img src="./imgs/Rectangle 14.svg" alt="" className="foto_perfil" />
        </a>
        <ul>
          <li></li>
          <li className="icones">
            <a href="perfil">
              <i className="fas fa-user-circle"></i>Perfil
            </a>
          </li>
          <li className="icones">
            <a href="dashboard">
              <i className="fas fa-qrcode"></i>Dashboard
            </a>
          </li>
          <li className="icones">
            <a href="cardapio">
              <i className="fas fa-plus"></i>Refeição
            </a>
          </li>
          <li className="icones">
            <i className="fas fa-power-off"></i>Desconectar
          </li>
          <li className="icones">
            <a href="feed">
              <i className="fas fa-sync"></i>Recarregar
            </a>
          </li>
        </ul>
        <img className="logo_sidebar" src="./imgs/logo.svg" alt="" />
      </div>

      <div className="conteudo">
        <header className="header_feed">
          <h1 className="titulo_pagina">Bem-vindo ao cardapio!</h1>
        </header>

        <section className="cardapio__conteudo">
          <div className="cardapio__cafe itens">
            <div className="img_titulo teste">
              <img src="./imgs/coffee.svg" alt="" />
              <p>Café da manhã</p>
              <Link to="/listaalimentos" onClick={() => handleRefeicao(1)}>
                <i className="fas fa-plus"></i>
              </Link>
            </div>
            <p className="ver-refeicao">
              <Link to="/visualizaralimentos">Visualizar sua refeição</Link>
            </p>
          </div>

          <div className="cardapio__almoco itens">
            <div className="img_titulo teste">
              <img src="./imgs/beverage.svg" alt="" />
              <p>Almoço</p>
              <Link to="/listaalimentos" onClick={() => handleRefeicao(2)}>
                <i className="fas fa-plus"></i>
              </Link>
            </div>
            <p className="ver-refeicao">
              <Link to="/visualizaralimentos">Visualizar sua refeição</Link>
            </p>
          </div>

          <div className="cardapio__jantar itens">
            <div className="img_titulo teste">
              <img src="./imgs/prato(1).svg" alt="" />
              <p>Jantar</p>
              <Link to="/listaalimentos" onClick={() => handleRefeicao(3)}>
                <i className="fas fa-plus"></i>
              </Link>
            </div>
            <p className="ver-refeicao">
              <Link to="/visualizaralimentos">Visualizar sua refeição</Link>
            </p>
          </div>

          <div className="cardapio__lanches_outros itens ">
            <div className="img_titulo teste">
              <img src="./imgs/salad(1).svg" alt="" />
              <p>Lanches/Outros</p>
              <Link to="/listaalimentos" onClick={() => handleRefeicao(4)}>
                <i className="fas fa-plus"></i>
              </Link>
            </div>
            <p className="ver-refeicao">
              <Link to="/visualizaralimentos">Visualizar sua refeição</Link>
            </p>
          </div>
        </section>
      </div>

      <div className="componente">
        <img src="./imgs/Component11.svg" alt="" />
      </div>
    </>
  );
};

export default Cardapio;

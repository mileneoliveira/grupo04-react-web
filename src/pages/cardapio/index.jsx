import React from "react";
import api from "services/api";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "hooks/useAuth";
import { useSnack } from "hooks/useSnack";
import "./style.css";
import { notificationError } from "utils/notifications";
import { notificationSuccess } from "../../utils/notifications";
import MoldeSide from '../../components/molde-sidebar/molde-sidebar';


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
    <MoldeSide />

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
              <Link to="visualizaralmoco">Visualizar sua refeição</Link>
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
              <Link to="/visualizarjantar">Visualizar sua refeição</Link>
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
              <Link to="/visualizaroutros">Visualizar sua refeição</Link>
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

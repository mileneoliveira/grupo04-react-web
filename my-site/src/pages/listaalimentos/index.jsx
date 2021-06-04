import React, { useEffect, useState, useCallback } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "utils/schema";
import { useHistory } from "react-router-dom";
import { useSnack } from "hooks/useSnack";

import api from "services/api";
import { Select } from "antd";
import Input from "components/Inputs";
import "./style.css";
import { notificationError } from "utils/notifications";
import { notificationSuccess } from "../../utils/notifications";

const ListaAlimentos = () => {
  const history = useHistory();
  const { snack } = useSnack();

  const [foods, setFoods] = useState([]);
  const [listFoods, setListFoods] = useState();
  const [idFood, setIdFood] = useState();
  const [loading, setLoading] = useState(false);

  const { Option } = Select;

  const listAlimentos = useCallback(async () => {
    const { data } = await api.get(
      `/refeicoes-alimentos/alimentos?idRefeicao=${snack.id}`
    );
    setListFoods(data);
  }, [snack.id]);

  useEffect(() => {
    const handleAlimentos = async () => {
      const { data } = await api.get("/alimentos");
      setFoods(data);
    };
    listAlimentos();
    handleAlimentos();
  }, [listAlimentos]);

  const onChange = (value) => {
    setIdFood(value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(SchemaLogin),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const id = { idRefeicao: snack.id, idAlimento: idFood };
    const form = { id, ...data };

    try {
      await api.post("/refeicoes-alimentos", form);

      listAlimentos();
      setLoading(false);
      return notificationSuccess(
        "Sucesso",
        "Seu alimento foi cadastrado na sua refeição"
      );
    } catch (error) {
      setLoading(false);
      console.log(error);

      return notificationError(
        "Erro",
        "Não foi possivel fazer o cadastro do seu alimento"
      );
    }
  };

  return (
    <>
      <div className="wrapper-lista-alimentos">
        <div className="nav-lista-alimentos">
          <div className="logo-lista-alimentos">
            <img src="img/logo.svg" alt="" />
          </div>
          <div className="menu-lista-alimentos">
            <ul>
              <li>
                <a className="botao-nav-lista-alimentos" href="feed">
                  HOME
                </a>
              </li>
              <li>
                <a className="botao-nav-lista-alimentos" href="cardapio">
                  REFEIÇÃO
                </a>
              </li>
              <li>
                <a className="botao-nav-lista-alimentos" href="perfil">
                  SAIR
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="box-lista-alimentos">
        <div className="container-lista-alimentos">
          <div className="conteudo-lista-alimentos">
            <div className="alimento-lista-alimentos">
              <section className="informar-alimento-lista-alimentos">
                <h2 className="titulo-lista-lista-alimentos">
                  Informe seu alimento
                </h2>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="">
                    <p>Nome do alimento:</p>

                    <Select
                      showSearch
                      style={{ width: 300 }}
                      placeholder="Selecione seu alimento"
                      optionFilterProp="children"
                      onChange={onChange}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      {foods ? (
                        foods.map((food) => (
                          <Option key={food.idAlimento} value={food.idAlimento}>
                            {food.nome}
                          </Option>
                        ))
                      ) : (
                        <Option value="">Carregando</Option>
                      )}
                    </Select>
                  </label>
                  <label htmlFor="">
                    <p>Quantia:</p>

                    <Input
                      id="quantia"
                      name="porcao"
                      type="number"
                      placeholder="you@example.com"
                      register={register}
                    />
                  </label>

                  {loading ? (
                    <button
                      disabled="disabled"
                      id="btn-adicionar-lista-alimentos"
                    >
                      Carregando
                    </button>
                  ) : (
                    <button type="submit" id="btn-adicionar-lista-alimentos">
                      Adicionar
                    </button>
                  )}
                </form>
                <img
                  className="logo-box-lista-alimentos"
                  src="img/logo.svg"
                  alt=""
                />
              </section>
            </div>
          </div>
          <div className="conteudo-lista-lista-alimentos">
            <div className="lista-alimento-lista-alimentos">
              <div className="itens-lista-lista-alimentos">
                <h2 className="titulo-itens-alimento-lista-alimentos">
                  Aqui estão seus alimentos
                </h2>
                <hr />
                <ul>
                  {listFoods ? (
                    listFoods.map((food, key) => (
                      <li key={key}>{food.nomeAlimento}</li>
                    ))
                  ) : (
                    <li value="">Adicione alimentos</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaAlimentos;

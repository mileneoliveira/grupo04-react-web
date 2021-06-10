import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "utils/schema";
import { useAuth } from "hooks/useAuth";
import { LocalDiningOutlined } from "@material-ui/icons";

import { useHistory, Link } from "react-router-dom";
import Input from "components/Inputs";
import { notificationError } from "utils/notifications";


import "antd/dist/antd.css";
import "./style.css";

const Login = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaLogin),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await signIn(data);

    if (!response) {
      return setLoading(false);
    }
    history.push("/feed");
  };

  return (
    <div className="container">
      <a href="/">
        <h1 className="logo">
          <img src="./imgs/logo.svg" alt="" />
        </h1>
      </a>

      <div className="conteudo_login">
        <div className="box_login">
          <header className="welcome-login">
            <h1>Seja bem-vindo!</h1>
            <h2>Realize o seu login:</h2>
          </header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">
              <label className="lb-email">
                Insira seu E-mail
                {errors.email && <span className="invalido">Campo invalido</span>}
              </label>
              <Input
                className="input-login-email"
                id="email"
                name="email"
                type="email"
                placeholder="E-mail"
                register={register}
              />
            </label>

            <label htmlFor="">
              <label className="lb-senha">
                Insira sua senha
                {errors.senha && <span className="invalido">Campo invalido</span>}
              </label>
              <Input
                className="input-login-senha"
                id="senha"
                name="senha"
                type="password"
                placeholder="Senha"
                register={register}
              />
             
            </label>

            {loading ? (
              <button type="submit" className="buttom-login">
              Carregando
             </button>
            ) : (
              <button type="submit" className="buttom-login">
                Iniciar Sessão
              </button>
            )}
          </form>
          <div className="nao-tem">
            <p>
              Não tem uma conta? <a href="cadastro">Cadastre-se</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

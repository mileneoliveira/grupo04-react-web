import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaLogin } from "utils/schema";
import { useAuth } from "hooks/useAuth";
import FreeSoloCreateOption from "../../components/molde-addA";
import FreeSolo from "components/molde-addA";
import api from "services/api";
import UploadImg from "components/UploadImg";

import Input from "components/Inputs";
import { notificationError, notificationSuccess } from "utils/notifications";

function Teste() {
  const { user } = useAuth();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await api.get(`usuarios?idUsuario=${user.id}`);

      console.log(data);

      setValue("nome", data[0].nome);
      setValue("dataNascimento", data[0].dataNascimento);
      setValue("email", data[0].email);
      setValue("senha", data[0].senha);
      setValue("peso", data[0].peso);
      setValue("altura", data[0].altura);
    };
    getUser();
  }, []);

  const { register, handleSubmit, setValue } = useForm({});

  const onSubmit = async (data) => {
    try {
      await api.put(`/usuarios?id=${user.id}`, data);
      notificationSuccess("Sucesso", "O usuario foi alterado com sucesso");
    } catch (error) {
      console.log(error);
      notificationError("Erro", "Não foi possivel alterar o usuario");
    }
  };

  return (
    <>
      <h2 id="simple-modal-title">Perfil:</h2>
      <p id="simple-modal-description">
        Atualize as informações do seu perfil!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h3>Nome:</h3>
          <Input
            className="input-login"
            id="nome"
            name="nome"
            placeholder="coloque seu nome"
            register={register}
          />
        </label>
        <label>
          <h3>Data de Nascimento:</h3>
          <Input
            className="input-login"
            id="dataNasc"
            name="dataNascimento"
            type="date"
            placeholder="you@example.com"
            register={register}
          />
        </label>
        <label>
          <h3>Email:</h3>
          <Input
            className="input-login"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            register={register}
          />
        </label>
        <label>
          <h3>Senha:</h3>
          <Input
            className="input-login"
            id="senha"
            name="senha"
            type="password"
            placeholder="coloque sua senha"
            register={register}
          />
        </label>
        <label>
          <h3>Peso:</h3>
          <Input
            className="input-login"
            id="peso"
            name="peso"
            type="number"
            placeholder="coloque seu peso"
            register={register}
          />
        </label>
        <label>
          <h3>Altura:</h3>
          <Input
            className="input-login"
            id="altura"
            name="altura"
            type="number"
            placeholder="coloque sua altura"
            register={register}
          />
        </label>
        <label>
          <h3>Imagem de perfil:</h3>
          <UploadImg
            url={
              "http://localhost:8080/usuarios/cadastrar-imagem?idUsuario=" +
              user.id
            }
          />
        </label>
        <br />
        <button id="btnmodal2" type="submit">
          Aplicar
        </button>
      </form>
    </>
  );
}

export default Teste;

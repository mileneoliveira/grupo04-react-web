import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UploadImg from "components/UploadImg";
import { useAuth } from "hooks/useAuth";
import Input from "components/Inputs";
import api from "services/api";
import Modal from "components/Modal";

import "./style.css";

function Publicar(props) {
  const { user } = useAuth();
  const { register, handleSubmit } = useForm({});

  const [visible, setVisible] = useState(false);
  const [idPublication, setIdPublication] = useState();

  const usuario = {
    idUsuario: user.id,
  };

  const handleCancelModal = () => {
    setVisible(false);
  };

  const onSubmit = async (data) => {
    const form = { ...data, usuario };
    try {
      const response = await api.post("/publicacoes", form);
      setIdPublication(response.data);
      setVisible(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="header_feed">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="publicacao"
          name="descricao"
          placeholder="o que você comeu hoje?"
          maxLength="100"
          register={register}
        />
        <button type="submit" className="Publico">
          Publicar
        </button>
      </form>

      <Modal
        title="adicionar foto"
        visible={visible}
        onCancel={handleCancelModal}
        footer={<button onClick={handleCancelModal}>Finalizar</button>}
      >
        <UploadImg
          url={
            "http://localhost:8080/publicacoes/cadastrar-imagem?idPublicacao=" +
            idPublication
          }
        />
        <p> Apos enviar a foto do seu avatar, basta finalizar </p>
      </Modal>
    </header>
  );
}
export default Publicar;

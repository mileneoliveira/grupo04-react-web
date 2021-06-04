import * as yup from "yup";

const msg = {
  Required: "Informe esse campo",
  Number: "Somente números",
  Email: "Informe um email valido",
  Positive: "Somente números positivos",
  Integer: "Somente números inteiros",
};

export const SchemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().required(),
});

export const SchemaBasic = yup.object().shape({
  nome: yup.string().required(msg.Required),
  avatar: yup.string().required(msg.Required),
  cpf: yup.string().min(14, "Min 11 digitos").required(msg.Required),
  dataNasc: yup.string().required(msg.Required),

  email: yup.string().email(msg.Email).required(msg.Required),
  senha: yup.string().min(8, "min 8 caracters").required(msg.Required),
  confirmSenha: yup
    .string()
    .oneOf([yup.ref("senha"), null], "Senhas diferentes")
    .required(msg.Required),
});

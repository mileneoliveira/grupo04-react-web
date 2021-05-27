import React, { useEffect, useState } from 'react';
import api from '../../services/api';

function Teste() {
    const [usuarioEdit, setUsuarioEdit] = useState({});

    useEffect(() => {
        async function getUsuario() {
            const resposta = await api.get('usuarios', {
                params: {
                    idUsuario: sessionStorage.getItem('idUsuario'),
                }
            }, setUsuarioEdit(resposta.data));
            console.log(resposta.data);
            getUsuario();
        }
    }, [])

    function handle(e) {
        const newUsuario = { ...usuarioEdit };
        newUsuario[e.target.id] = e.target.value;
        setUsuarioEdit(newUsuario);
    }

    function atualizar(e) {
        api.put('usuarios', {
            params: {
                idUsuario: sessionStorage.getItem('idUsuario'),
            },
            nome: usuarioEdit.nome,
            senha: usuarioEdit.senha,
            email: usuarioEdit.email,
            peso: usuarioEdit.peso,
            altura: usuarioEdit.altura,
            dataNascimento: usuarioEdit.dataNascimento
        }).then(resposta => {
            if (resposta.status == 200) {
                alert("Seus dados foram alterados com sucesso!");
            } else if (resposta.status == 429) {
                alert("Aguarde um momento, nosso servidor esta sobrecarregado!")
            }
        })
    }

    return (
        <>
            <h2 id="simple-modal-title">Perfil:</h2>
            <p id="simple-modal-description">
                Atualize as informações do seu perfil!
        </p>
            <form onSubmit={(e) => atualizar(e)}>
                <label>
                    <h3>Nome:</h3>
                    <input type="text" placeholder="Nome:" id="nome" onChange={(e) => handle(e)} id="url" value={usuarioEdit.nome} defaultValue={usuarioEdit.nome} />
                </label>
                <label>
                    <h3>Data de Nascimento:</h3>
                    <input  type="date" placeholder="Data Nascimento:" id="dataNasc" onChange={(e) => handle(e)} id="url" value={usuarioEdit.dataNascimento} defaultValue={usuarioEdit.dataNascimento} />
                </label>
                <label>
                    <h3>Email:</h3>
                    <input  ype="text" placeholder="Email:" id="email" onChange={(e) => handle(e)} id="url" value={usuarioEdit.email} defaultValue={usuarioEdit.email} />
                </label>
                <label>
                    <h3>Senha:</h3>
                    <input type="Password" placeholder="Senha:" id="senha" onChange={(e) => handle(e)} id="url" value={usuarioEdit.senha} defaultValue={usuarioEdit.senha} />
                </label>
                <label>
                    <h3>Peso:</h3>
                    <input type="number" placeholder="Nome:" id="peso" onChange={(e) => handle(e)} id="url" value={usuarioEdit.peso} defaultValue={usuarioEdit.peso} />
                </label>
                <label>
                    <h3>Altura:</h3>
                    <input type="number" placeholder="Nome:" id="altura" onChange={(e) => handle(e)} id="url" value={usuarioEdit.altura} defaultValue={usuarioEdit.altura} />
                </label>
                <label>
                    <h3>Imagem de perfil:</h3>
                    <input type="file" placeholder="Nome:" />
                </label>
                <br />
                <button id="btnmodal2" type="submit">Aplicar</button>
            </form>
        </>
    );
}

export default Teste;
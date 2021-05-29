import React, { useEffect, useState } from 'react';
import FreeSoloCreateOption from '../../components/molde-addA';
import FreeSolo from '../../components/molde-addA';
import api from '../../services/api';

function Teste() {
    const[usuarioEdit, setUsuarioEdit] = useState({});

    useEffect(() => {
        async function getUsuario() {
            const resposta = await api.get('usuarios', {
                params: {
                    idUsuario: sessionStorage.getItem('idUsuario'),
                }
            });
            setUsuarioEdit(resposta.data);
        }
        getUsuario();
    }, [])

    function handle(e) {
        const newUsuario = {...usuarioEdit};
        newUsuario[e.target.id] = e.target.value;
        setUsuarioEdit(newUsuario);
    }

    function atualizar(e) {
        e.preventDefault();
        api.put('usuarios', {
            params: {
                id: sessionStorage.getItem('idUsuario'),
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
                    <input type="text" onChange={(e) => handle(e)} id="nome" value={usuarioEdit.nome} defaultValue={usuarioEdit.nome} />
                </label>
                <label>
                    <h3>Data de Nascimento:</h3>
                    <input  type="date" id="dataNasc" onChange={(e) => handle(e)} value={usuarioEdit.dataNascimento} defaultValue={usuarioEdit.dataNascimento} />
                </label>
                <label>
                    <h3>Email:</h3>
                    <input  ype="text"  id="email" onChange={(e) => handle(e)}  value={usuarioEdit.email} defaultValue={usuarioEdit.email} />
                </label>
                <label>
                    <h3>Senha:</h3>
                    <input type="Password" id="senha" onChange={(e) => handle(e)} value={usuarioEdit.senha} defaultValue={usuarioEdit.senha} />
                </label>
                <label>
                    <h3>Peso:</h3>
                    <input type="number" id="peso" onChange={(e) => handle(e)}  value={usuarioEdit.peso} defaultValue={usuarioEdit.peso} />
                </label>
                <label>
                    <h3>Altura:</h3>
                    <input type="number" id="altura" onChange={(e) => handle(e)} value={usuarioEdit.altura} defaultValue={usuarioEdit.altura} />
                </label>
                <label>
                    <h3>Imagem de perfil:</h3>
                    <input type="file" placeholder="Nome:" />
                </label>
                <br />
                <button id="btnmodal2" type="submit">Aplicar</button>
            </form>
            <FreeSoloCreateOption />
        </>
    );
}

export default Teste;
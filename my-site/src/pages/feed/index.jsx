import React, { useEffect, useState } from 'react';
import Molde from '../../components/molde-feed-perfil/molde-feed';
import MoldeSidebar from '../../components/molde-sidebar/molde-sidebar';
import api from '../../services/api';

const Feed = () => {

    const [publis, setPublis] = useState([]);
    useEffect(() => {
        async function getFeed() {
            const resposta = await api.get("/publicacoes");
            setPublis(resposta.data);
            console.log(resposta.data);
        }
        getFeed();
    }, []);

    return (
        <>
        <MoldeSidebar />
            <div className="container">
                <div className="publicacoes">
                {publis.map((publi) => (
                    <Molde nome={publi.nomeUsuario} descricao={publi.descricao} />
                ))}
                </div>
            </div>
        </>
    )
}

export default Feed;
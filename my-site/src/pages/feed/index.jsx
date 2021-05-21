import React, { useEffect, useState } from 'react';
import Molde from '../../components/molde-feed-perfil/molde-feed';
import MoldeSidebar from '../../components/molde-sidebar/molde-sidebar';
import api from '../../services/api';
import Publicar from '../../components/Publicar';

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
        <Publicar/>
            <div className="container">
                <div className="publicacoes">
                {publis.map((publi) => (
                   <article key={publi.idUsuario}>
                        <Molde nome={publi.nomeUsuario} descricao={publi.descricao} />               
             </article>
                ))}
                </div>
            </div>
        </>
    )
}

export default Feed;
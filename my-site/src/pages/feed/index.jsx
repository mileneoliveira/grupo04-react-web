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

    // const [publisImg, setPublisImg] = useState([]);
    // useEffect(() => {
    //     async function getFeedImg() {
    //         const resposta = await api.get("/${props.imagem}");
    //         setPublisImg(resposta.data);
    //         console.log(resposta.data);
    //     }
    //     getFeedImg();
    // }, []);

    return (
        <>
            <MoldeSidebar />
            <Publicar />
            <div className="container">
                <div className="publicacoes">
                    {publis.map((publi) => (
                        <article key={publi.idUsuario}>
                            <Molde nome={publi.nomeUsuario} descricao={publi.descricao} imagem={"http://localhost:8080" + publi.imagem}/>
                        </article>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Feed;
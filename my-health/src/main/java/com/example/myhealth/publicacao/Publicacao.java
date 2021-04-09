package com.example.myhealth.publicacao;

import javax.persistence.*;

@Entity
public class Publicacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_publicacao")
    private Integer idPublicacao;
    private String descricao;
    private Integer curtida;
    @Column(name = "url_imagem")
    private String urlImagem;
    @Column(name = "usuario_id")
    private Integer usuarioId;

    public Integer getIdPublicacao() {
        return idPublicacao;
    }

    public void setId(Integer id) {
        this.idPublicacao = id;
    }

    public void setIdPublicacao(Integer idPublicacao) {
        this.idPublicacao = idPublicacao;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Integer getCurtida() {
        return curtida;
    }

    public void setCurtida(Integer curtida) {
        this.curtida = curtida;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public void setUsuarioId(Integer usuarioId) {
        this.usuarioId = usuarioId;
    }
}

package com.example.myhealth.publicacao.response;

import com.example.myhealth.publicacao.Publicacao;

public class PublicacaoResponse {

    private String descricao;
    private Integer curtida;
    private String urlImagem;
    private Integer usuarioId;
    private String nomeUsuario;

    public PublicacaoResponse(Publicacao entidade) {
        this.descricao = entidade.getDescricao();
        this.curtida = entidade.getCurtida();
        this.urlImagem = entidade.getUrlImagem();
        this.usuarioId = entidade.getUsuario().getIdUsuario();
        this.nomeUsuario = entidade.getUsuario().getNome();
    }

    public String getDescricao() {
        return descricao;
    }

    public Integer getCurtida() {
        return curtida;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public Integer getUsuarioId() {
        return usuarioId;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }
}
